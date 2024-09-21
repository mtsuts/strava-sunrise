const express = require('express')
const router = express.Router()
const axios = require('axios')
const stravaAuth = require('../middleware/stravaAuth')


router.get('/get-data', stravaAuth, async (req, res) => {
  const { accessToken, athleteID } = req.session
  try {
    if (!accessToken) {
      throw new Error('Access token missing!')
    }
    const url = `https://www.strava.com/api/v3/athlete/activities?per_page=10&page=1`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return res.json({ data: response.data, accessToken });
  } catch (e) {
    res.status(500).send(e.message)
  }
})

module.exports = router