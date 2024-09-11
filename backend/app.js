const express = require('express')
const axios = require('axios');
const session = require('express-session')
const MongoStore = require('connect-mongo')
const cors = require('cors')
require('./db/mongoose')

const app = express()
const port = 3000

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));

app.use(session({
  secret: 'santaclause',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/session-store',
    collectionName: 'sessions',
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'Lax',
    maxAge: 1000 * 60 * 60 * 24 
  },
}));

const CLIENT_ID = '101939';
const CLIENT_SECRET = '356fbee0b5dd4bd4fefefbe85d9ea125e832b065';
const REFRESH_TOCKEN = '2487e6c38a25821e478f7f4fb0243d6946810bc1';
const REDIRECT_URI = 'http://localhost:3001/my-profile';

app.get('/get-auth-url', (req, res) => {
  const authUrl = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=read,activity:read_all`;
  res.json({authUrl})
});


app.get('/get-data', async (req, res) => {
  const { AccessToken, athleteID } = req.session
  const { code } = req.query;

  try {
    if (code && !AccessToken) {
      const tokenResponse = await axios.post('https://www.strava.com/oauth/token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      });

      const { access_token, refresh_token, athlete } = tokenResponse.data;
      req.session.AccessToken = access_token
      req.session.athleteID = athlete.id

      const url = `https://www.strava.com/api/v3/athlete/activities?per_page=30&page=4`;
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      return res.json(response.data);
    }

    if (AccessToken) {
      const url = `https://www.strava.com/api/v3/athlete/activities?per_page=30&page=4`;
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      });
      return res.json(response.data);

    }
  } catch (e) {
    res.status(500).send(e)
  }
})


app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})
