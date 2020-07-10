const express = require('express')
const router = express.Router()
const usersController = require('../controllers/controlUsers.js')

/**
 * Routes users
 */

router.post('/register', usersController.register)

module.exports = router
