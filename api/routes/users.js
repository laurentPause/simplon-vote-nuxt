const express = require('express')
const router = express.Router()
const users = require('../controllers/users.js')

/**
 * Routes users
 */

router.post('/login', users.login)
router.post('/register', users.register)
router.get('/logout', users.logout)
router.post('/unregister', users.unregister)

module.exports = router
