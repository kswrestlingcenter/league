const mongoose = require('mongoose')

const Schema = mongoose.Schema

const participantSchema = new Schema({
  wrestlerId       : {type: mongoose.Schema.Types.ObjectId},
  createdAt        : {type: Date, default: Date.now},
  firstName        : {type: String},
  lastName         : {type: String},
  weight           : {type: Number},
  skillLevel       : {type: Number}
})

const Participant = mongoose.model('Participant', participantSchema)

module.exports = Participant
module.exports.Schema = participantSchema
