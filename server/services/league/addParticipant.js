const LeagueEvent = require('../../models/leagueEvent')
const Participant = require('../../models/participant')
const Wrestler = require('../../models/wrestler')

module.exports = async ({wrestlerId, leagueEventId, weight}) => {
  console.log("Adding Participant to League :", {wrestlerId, leagueEventId, weight})

  // const wrestler = await Wrestler.findById(wrestlerId).toJSON()
  const wrestler = await Wrestler.findOne()

  console.log({wrestler})

  const participant = new Participant(wrestler)
  participant.weight = weight

  console.log({participant})

  const $update = {
    $push: {
      participants: participant
    }
  }

  await LeagueEvent.findByIdAndUpdate(leagueEventId, $update)

  return participant

}