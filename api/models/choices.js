/** Model user_vote
 * @module models/choices
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name choicesSchema
 * @requires mongoose
 * @memberof module:models/choices
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const choicesSchema = mongoose.Schema({

  type: {
    type: String,
    required: true
  },
  fields: {
    type: String,
    required: true,
    unique: true
  },
  createdBy: {
    type: ObjectId,
    required: true,
    ref: 'users'
  }
})

module.exports = mongoose.model('choices', choicesSchema)
