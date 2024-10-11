const express = require('express')
const router = express.Router()


router.get('/save-routes', async (req, res) => {
  res.send('routes saved!')
})

module.exports = router