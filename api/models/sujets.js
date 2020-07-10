/** Model user_vote
 * @module models/sujets
 * @requires mongoose
 */

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
// eslint-disable-next-line no-unused-vars
const Schema = mongoose.Schema

/**
 * @name sujetsSchema
 * @requires mongoose
 * @memberof module:models/sujets
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const sujetsSchema = mongoose.Schema({

  question: {
    type: String,
    required: true
  },
  quota: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} n'est pas un entier"
    }
  },
  choices: {
    type: ObjectId,
    required: true,
    ref: 'choices'
  },
  nbVote: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} n'est pas un entier"
    },
    default: 0
  },
  createdBy: {
    type: ObjectId,
    required: true,
    ref: 'users'
  },
  status: {
    type: String,
    required: true,
    enum: ['created', 'inprogress', 'finished'],
    default: 'created'
  }

})

module.exports = mongoose.model('sujets', sujetsSchema)
