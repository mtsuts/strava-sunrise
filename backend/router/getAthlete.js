const express = require('express')
const router = express.Router()
const stravaAuth = require('../middleware/stravaAuth')
const { fetchData, fetchAthlete } = require('../middleware/fetchDataStrava')
const { createClient } = require('@supabase/supabase-js')


const supabaseKey = process.env.SUPABASE_KEY
const supabaseUrl = process.env.SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)

router.get('/get-athlete', stravaAuth, fetchAthlete, async (req, res) => {
  const accessToken = req.session.accessToken
  const userID = req.session.athleteID

  try {
    const { data, error } = await supabase
      .from('athletes')
      .select()
      .eq('athleteID', userID)

    res.send({ data })
  } catch (e) {
    res.status(500).send(e.messaxge)
  }

})

module.exports = router