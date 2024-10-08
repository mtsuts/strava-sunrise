const axios = require('axios')
const { saveActivities, saveAthleteStats, fetchActivitiesById, fetchAthleteStatsById } = require('../db/supabase')
const { fromMetersSecondToKmsHour, fromMetersToKms, dateFormatter, fromSecondsToMins } = require('../utils/metricsUpdates')
const geocode = require('../utils/geocoding')
const { activities, athletesStats } = require('./data')
const polyline = require('@mapbox/polyline')


const fetchData = async (req, res, next) => {
  try {
    const { code } = req.query
    const accessToken = req.session.accessToken
    const athleteID = req.session.athleteID
    if (!accessToken) {
      throw new Error('Access token missing!')
    }
    if (code) {
      const activitiesResponse = await activities(accessToken)
      const athletesStatsResponse = await athletesStats(accessToken, athleteID)

      // userID
      const userId = activitiesResponse.data[0].athlete.id

      // save and fetch user activities
      const userActivities = await Promise.all(activitiesResponse.data.map(async (d) => {
        return {
          name: d.name,
          type: d.type,
          athleteID: d.athlete.id,
          activityID: d.id,
          averageSpeed: fromMetersSecondToKmsHour(d.average_speed),
          distance: fromMetersToKms(d.distance),
          startDate: dateFormatter(d.start_date),
          polyline: polyline.decode(d.map.summary_polyline),
          startCoords: d.start_latlng,
          endCoords: d.end_latlng,
          elevatationGain: Math.floor(d.total_elevation_gain),
          sportType: d.sport_type,
          country: d.location_country,
          movingTime: fromSecondsToMins(d.moving_time),
          elevationHigh: Math.floor(d.elev_high),
          elevationLow: Math.floor(d.elev_low),
          city: await geocode(d.start_latlng[0], d.start_latlng[1])
        }
      }))

      const userDBActivities = await fetchActivitiesById(userId);

      if (userDBActivities.length === 0) {
        await saveActivities(userActivities);
      } else {
        const filtereduserActivities = userActivities.filter((activity) =>
          !userDBActivities.some(d => Number(d.activityID) === activity.activityID)
        );

        if (filtereduserActivities.length > 0) {
          await saveActivities(filtereduserActivities);
        }
      }

      // save and fetch user athlete stats
      const userAthletesStatsData = [
        {
          athleteID: req.session.athleteID,
          biggestRide: fromMetersToKms(athletesStatsResponse.biggest_ride_distance),
          biggestClimb: Math.floor(athletesStatsResponse.biggest_climb_elevation_gain),
          allDistance: fromMetersToKms(athletesStatsResponse.all_ride_totals.distance),
          allElevation: athletesStatsResponse.all_ride_totals.elevation_gain,
          allMovingTime: fromSecondsToMins(athletesStatsResponse.all_ride_totals.moving_time)
        }
      ]
      const userAthletesStatsDBData = await fetchAthleteStatsById(userId)

      if (userAthletesStatsDBData.length === 0) {
        await saveAthleteStats(userAthletesStatsData);
      } else {
        const filtered = userAthletesStatsData.filter((stats) =>
          !userAthletesStatsDBData.some(d => Number(d.athleteID) === stats.athleteID)
        );

        if (filtered.length > 0) {
          await saveAthleteStats(filtered);
        }
      }

    }
    next()
  } catch (e) {
    res.status(500).send(e.message)
  }
}

module.exports = fetchData