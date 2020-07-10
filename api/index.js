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

const app = express()

/**
 * Routes
 */
const userRoute = require('./routes/users')
const sujetRoute = require('./routes/sujets')

app.use('/users', userRoute)
app.use('/sujets', sujetRoute)

app.get('/echo/:what', (req, res) => {
  res.json(req.params)
})

module.exports = {
  path: '/api',
  handler: app
}
