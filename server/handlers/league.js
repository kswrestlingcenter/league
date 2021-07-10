const league = require('../services/league')
const wrap = require('./helpers/async-wrapper')

exports.addEvent = wrap(async(req, res) => {
  console.log("Add Event: ", req.data)
  const event = await league.addEvent(req.body)
  console.log({event})

  res.status(200).end()
})

exports.allLeagueEvents = wrap(async(req, res) => {
  console.log("All Events")
  const eventList = await league.getallLeagueEvents()
  res.json(eventList)
})

exports.getLeagueEventById = wrap(async(req, res) => {
  console.log("getEventById: ", req.params)
  const leagueEvent = await league.getLeagueEventById(req.params.leagueEventId)

  console.log("getEventById Done: ", leagueEvent)
  res.json(leagueEvent)
})