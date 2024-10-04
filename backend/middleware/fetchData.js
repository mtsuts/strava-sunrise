const axios = require('axios')
const { saveActivities, fetchActivitiesById } = require('../db/supabase')
const { fromMetersSecondToKmsHour, fromMetersToKms, dateFormatter, fromSecondsToMins } = require('../utils/metricsUpdates')
const geocode = require('../utils/geocoding')
const polyline = require('@mapbox/polyline')



const fetchData = async (req, res, next) => {
  try {
    const { code } = req.query
    const accessToken = req.session.accessToken
    if (!accessToken) {
      throw new Error('Access token missing!')
    }
    const url = `https://www.strava.com/api/v3/athlete/activities?per_page=10&page=1`;


    if (code) {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const userId = response.data[0].athlete.id
      const userData = await Promise.all(response.data.map(async (d) => {
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
      const userDBData = await fetchActivitiesById(userId);

      if (userDBData.length === 0) {
        await saveActivities(userData);
      } else {
        const filteredUserData = userData.filter((activity) =>
          !userDBData.some(d => Number(d.activityID) === activity.activityID)
        );

        if (filteredUserData.length > 0) {
          await saveActivities(filteredUserData);
        }
      }
    }
    next()
  } catch (e) {
    res.status(500).send(e.message)
  }
}

module.exports = fetchData