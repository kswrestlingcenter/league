const mongoose = require('mongoose')
const ParticipantSchema = require('./participant').Schema

const leagueEventSchema = new mongoose.Schema({
  createdAt        : {type: Date, default: Date.now},
  name             : {type: String},
  status           : {type: String, enum: ['created', 'ready', 'in-progress', 'complete', 'canceled'], default: 'created'},
  participants     : [ParticipantSchema]
})

const leagueEvent = mongoose.model('LeagueEvent', leagueEventSchema)

module.exports = leagueEvent
module.exports.Schema = leagueEventSchema
