const express = require('express')
const league = require('../handlers/league')
const wrestler = require('../handlers/wrestler')

const router = express.Router()

router.use(express.json())
// router.use(express.urlencoded({extended: true}))

router.post('/addWrestler', wrestler.addWrestler)
router.get('/allWrestlers', wrestler.allWrestlers)
router.get('/wrestler/:wrestlerId', wrestler.getWrestlerById)

router.post('/addLeagueEvent', league.addEvent)
router.get('/allLeagueEvents', league.allLeagueEvents)
router.get('/leagueEvent/:leagueEventId', league.getLeagueEventById)
router.post('/leagueEvent/:leagueEventId/addParticipant', league.addParticipant)

module.exports = router