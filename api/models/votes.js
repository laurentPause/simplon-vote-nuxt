/** Model user_vote
 * @module models/votes
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name votesSchema
 * @requires mongoose
 * @memberof module:models/votes
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const votesSchema = mongoose.Schema({

  participation: {
    type: ObjectId,
    required: true,
    ref: 'participants'
  },
  vote: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('votes', votesSchema)
