const express = require('express')
require('dotenv').config()
const authRouter = require('./router/auth')
const getDataRouter = require('./router/getData')
const logoutRouter = require('./router/logout')

const app = express()
const port = process.env.PORT || 3000

// strava authentication
app.use(authRouter)

// getting data from strava after authentication
app.use(getDataRouter)

// logout from strava
app.use(logoutRouter)

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})
