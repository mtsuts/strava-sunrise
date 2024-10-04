const express = require('express')
const router = express.Router()
const axios = require('axios')
const stravaAuth = require('../middleware/stravaAuth')
const fetchData = require('../middleware/fetchData')

router.get('/logout', stravaAuth, async (req, res) => {
  const { accessToken, athleteID } = req.session
  try {
    // Deauthorize from Strava
    await axios.post('https://www.strava.com/oauth/deauthorize', null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    req.session.destroy();
    // Clear local session/token (example)
    console.log('User logged out and token revoked successfully');
    // You can clear tokens in your database, session, or cookies here
  } catch (error) {
    console.error('Error during logout and deauthorization:', error.response ? error.response.data : error.message);
  }
})

module.exports = router