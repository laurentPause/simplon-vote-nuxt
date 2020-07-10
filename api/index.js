// eslint-disable-next-line no-unused-vars
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config()

/**
 * Database
 */
// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL + process.env.MONGO_DB
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  // connection established successfully
  console.warn('connection established successfully')
}).catch(
  // error connection
  e =>
    console.error(e)
)

/**
 * Express app
 */
// const userRoute = require('./routes/users.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
/**
 * Routes
 */

// console.log('route :', sujetRoute)
const userRoute = require('./routes/routeUsers.js')
// const sujetRoute = require('./routes/routeSujets')
app.use('/users', userRoute)
// app.use('/sujets', sujetRoute)

module.exports = {
  path: '/api',
  handler: app
}
