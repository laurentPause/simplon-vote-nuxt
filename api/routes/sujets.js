const express = require('express')
const router = express.Router()
const sujets = require('../controllers/sujets.js')

/**
 * Routes Sujets
 */

router.get('/', sujets.all)
router.post('/', sujets.add)
router.get('/:id', sujets.one)
router.put('/:id', sujets.update)
router.delete('/:id', sujets.delete)

module.exports = router
