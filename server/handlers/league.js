const league = require('../services/league')
const wrap = require('./helpers/async-wrapper')

exports.addEvent = wrap(async(req, res) => {
  console.log("Add Event: ", req.data)
  const event = await league.addEvent(req.body)
  console.log({event})

  res.status(200).end()
})

exports.allEvents = wrap(async(req, res) => {
  console.log("All Events")
  const eventList = await league.getAllEvents()
  res.json(eventList)
})

exports.getEventById = wrap(async(req, res) => {
  console.log("getEventById: ", req.params)
  const leagueEvent = await league.getEventById(req.params.leagueEventId)

  console.log("getEventById Done: ", leagueEvent)
  res.json(leagueEvent)
})