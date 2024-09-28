const express = require('express')
const router = express.Router()
const { createClient } = require('@supabase/supabase-js')
const stravaAuth = require('../middleware/stravaAuth')


const supabaseKey = process.env.SUPABASE_KEY
const supabaseUrl = process.env.SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)


router.get('/fetch-activities', stravaAuth, async (req, res) => {
  const { data, error } = await supabase
    .from('activities')
    .select()
    res.send(data)
})


module.exports = router
