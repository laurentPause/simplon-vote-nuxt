// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
const Users = require('../models/users')

/**
 * Controller users
 */
const controller = {}

controller.register = async function (req, res) {
  const pseudo = req.body.login
  const email = req.body.email
  const pass = req.body.pass
  const verifLogin = await Users.findOne({ login: pseudo })
  res.json({
    test: 'test'
  })
}

module.exports = controller
