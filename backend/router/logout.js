const express = require('express')
const router = express.Router()
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config()
require('../db/mongoose')

router.use(session({
  secret: process.env.SESSION_SECRET,
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


router.get('/logout', (req,res) => {
  req.session.AccessToken = ''
  console.log(req.session.AccessToken)
})



module.exports = router