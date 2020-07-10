const express = require('express')
// Import the mongoose module
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

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

// Get the default connection
const db = mongoose.connection

const app = express()

app.get('/echo/:what', (req, res) => {
  res.json(req.params)
})

module.exports = {
  path: '/api',
  handler: app
}
