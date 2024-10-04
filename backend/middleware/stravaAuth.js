const axios = require('axios')

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

const validateCode = (code) => {
  if (code === "null" || code === "undefined" || !code || !code?.trim()) {
    return false
  }
  return true
}

const stravaAuth = async (req, res, next) => {
  const { code } = req.query
  try {
    if (validateCode(code)) {
      const tokenResponse = await axios.post('https://www.strava.com/oauth/token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      });

      const { access_token, refresh_token, athlete } = tokenResponse.data;
      req.session.accessToken = access_token
      req.session.athleteID = athlete.id
      req.session.refreshToken = refresh_token
    } 
    next()
  } catch (e) {
    res.status(500).send(e.message)
  }
}

module.exports = stravaAuth