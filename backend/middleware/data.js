const axios = require('axios')
const activitiesURL = `https://www.strava.com/api/v3/athlete/activities?per_page=100&page=1`;


const activities = async (accessToken) => {
  const response = await axios.get(activitiesURL, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response
}

const athletesStats = async (accessToken, athleteID) => {
  const athletesStatsURL = `https://www.strava.com/api/v3/athletes/${athleteID}/stats`
  const response = await axios.get(athletesStatsURL, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  return response.data
}

module.exports = { activities, athletesStats }