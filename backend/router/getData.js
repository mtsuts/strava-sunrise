const express = require('express')
const router = express.Router()
const axios = require('axios')
const stravaAuth = require('../middleware/stravaAuth')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseKey = process.env.SUPABASE_KEY
const supabaseUrl = process.env.SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)

const saveDataToDb = async (stravaData) => {
  const { data, error } = await supabase
    .from('users')
    .insert(stravaData)
  if (error) {
    console.log(error.message)
  }
}


router.get('/get-data', stravaAuth, async (req, res) => {
  const { accessToken, athleteID } = req.session
  try {
    if (!accessToken) {
      throw new Error('Access token missing!')
    }
    const url = `https://www.strava.com/api/v3/athlete/activities?per_page=20&page=1`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const dataForDatabase = response.data.map((d) => {
      return {
        name: d.name,
        type: d.type
      }
    })
    const stravaUserId = response.data[0].athlete.id

    console.log(stravaUserId)
    saveDataToDb([{ athleteID: stravaUserId }])

    return res.json({ data: response.data, accessToken });

  } catch (e) {
    res.status(500).send(e.message)
  }
})

module.exports = router