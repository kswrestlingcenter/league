const LeagueEvent = require('../../models/leagueEvent')

module.exports = async (leagueEvent) => {
  console.log("Adding league Event inside the service: ", leagueEvent)

  const newEvent = new LeagueEvent(leagueEvent)

  await newEvent.save()

  console.log({newEvent})

  return newEvent

}