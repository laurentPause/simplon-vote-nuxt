/** Model user_vote
 * @module models/participants
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name participantsSchema
 * @requires mongoose
 * @memberof module:models/participants
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const participantsSchema = mongoose.Schema({

  user: {
    type: ObjectId,
    required: true,
    ref: 'users'
  },
  sujet: {
    type: ObjectId,
    required: true,
    ref: 'sujets'
  }
})

module.exports = mongoose.model('participants', participantsSchema)
