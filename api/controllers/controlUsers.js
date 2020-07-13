// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
const Users = require('../models/users')

/**
 * Controller users
 */
const controller = {}

controller.register = async function (req, res) {
  const verifLogin = await Users.findOne({ login: req.body.login })
  if (!verifLogin) {
    const verifEmail = await Users.findOne({ login: req.body.email })
    if (!verifEmail) {
      try {
        const user = await Users.create({
          login: req.body.login,
          email: req.body.email,
          password: req.body.pass
        })
        res.json({
          statut: 'OK'
        })
      } catch (e) {
        res.json({
          statut: 'KO',
          erreur: e

        })
      }
    } else {
      res.json({
        statut: 'KO',
        erreur: 'email'
      })
    }
  } else {
    res.json({
      statut: 'KO',
      erreur: 'login'
    })
  }
}

module.exports = controller
