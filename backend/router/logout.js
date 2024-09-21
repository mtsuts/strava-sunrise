const express = require('express')
const router = express.Router()
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const { MongoClient } = require('mongodb');

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

const client = new MongoClient('mongodb://127.0.0.1:27017');
const dbName = 'session-store';

router.get('/logout', async (req, res) => {
  // console.log(req.session.accessToken)
  // try {
  //   await client.connect();
  //   const db = client.db(dbName);
  //   const sessionsCollection = db.collection('sessions');
  //   await sessionsCollection.deleteMany({});
  // } catch (e) {
  //   res.status(500).send('Error while logging out!');
  // }
})



module.exports = router