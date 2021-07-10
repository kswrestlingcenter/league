const Events = require("../../models/leagueEvent")
module.exports = async () => {
  const eventList = await Events.find()
  console.log("from service", {eventList})
  return eventList
}