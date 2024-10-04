const express = require('express')
const router = express.Router()


const CLIENT_ID = process.env.CLIENT_ID
const REDIRECT_URI = 'http://localhost:3001/my-profile';


router.get('/get-auth-url', (req, res) => {
  const authUrl = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=read,activity:read_all`;
  res.json({authUrl})
});


module.exports = router