const express = require('express')
const router = express.Router()
const axios = require('axios')
const stravaAuth = require('../middleware/stravaAuth')
const { saveActivities, fetchActivitiesById } = require('../db/supabase')
require('dotenv').config()

router.get('/get-data', stravaAuth, async (req, res) => {
  const { accessToken, athleteID } = req.session

  try {
    if (!accessToken) {
      throw new Error('Access token missing!')
    }
    const url = `https://www.strava.com/api/v3/athlete/activities?per_page=40&page=1`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userId = response.data[0].athlete.id

    const userData = response.data.map((d) => {
      return {
        name: d.name,
        type: d.type,
        athleteID: d.athlete.id,
        activityID: d.id
      }
    })

    const userDBData = await fetchActivitiesById(userId);

    if (userDBData.length === 0) {
      await saveActivities(userData);
    } else {
      const filteredUserData = userData.filter((activity) =>
        !userDBData.some(d => Number(d.activityID) === activity.activityID)
      );

      console.log(filteredUserData);

      if (filteredUserData.length > 0) {
        await saveActivities(filteredUserData);
      }
    }


    return res.json({ data: response.data, accessToken });

  } catch (e) {
    res.status(500).send(e.message)
  }
})

module.exports = router