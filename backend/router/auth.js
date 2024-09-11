const express = require('express')
const router = express.Router()
const cors = require('cors')


const CLIENT_ID = '101939';
const CLIENT_SECRET = '356fbee0b5dd4bd4fefefbe85d9ea125e832b065';
const REFRESH_TOCKEN = '2487e6c38a25821e478f7f4fb0243d6946810bc1';
const REDIRECT_URI = 'http://localhost:3001/my-profile';

router.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));


router.get('/get-auth-url', (req, res) => {
  const authUrl = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=read,activity:read_all`;
  res.json({authUrl})
});



module.exports = router