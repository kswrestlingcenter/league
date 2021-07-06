const express = require('express')
const wrestler = require('../handlers/wrestler')

const router = express.Router()

router.use(express.json())
// router.use(express.urlencoded({extended: true}))

router.post('/addWrestler', wrestler.addWrestler)
router.get('/allWrestlers', wrestler.allWrestlers)

module.exports = router