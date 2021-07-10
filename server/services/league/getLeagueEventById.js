const Events = require("../../models/leagueEvent")

module.exports = async(leagueEventId) => {
  const leagueEvent = await Events.findById(leagueEventId)
  console.log("from service", {leagueEvent})
  return leagueEvent
}