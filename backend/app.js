const express = require('express')
const authRouter = require('./router/auth')
const getDataRouter =  require('./router/getData')


const app = express()
const port = 3000


// strava authentication
app.use(authRouter)

// getting data from strava after authentication
app.use(getDataRouter)

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})
