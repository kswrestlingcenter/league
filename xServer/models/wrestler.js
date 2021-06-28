const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wrestlerSchema = new Schema({
  usawId           : {type: String},
  email            : {type: String, default: ""},
  createdAt        : {type: Date, default: Date.now},
  firstName        : {type: String, required: true},
  lastName         : {type: String, required: true},
  dob              : {type: Date},
  phone            : {type: String},
  gender           : {type: String},
  address1         : {type: String},
  address2         : {type: String},
  city             : {type: String},
  state            : {type: String},
  postalCode       : {type: String},
  guardians        : [String]
})

const Wrestler = mongoose.model('Wrestler', wrestlerSchema)

module.exports = Wrestler
