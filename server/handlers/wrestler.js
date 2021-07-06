const wrestler = require('../services/wrestler')
const wrap = require('./helpers/async-wrapper')

exports.addWrestler = wrap(async(req, res) => {
  console.log("Add Wrestler: ", req.body)
  const returnedWrestler = await wrestler.addWrestler(req.body)
  console.log({returnedWrestler})

  res.status(200).end()
})

exports.allWrestlers = wrap(async(req, res) => {
  console.log("All Wrestlers")
  const wrestlerList = await wrestler.getAllWrestlers()
  res.json({wrestlerList})
})

exports.getWrestlerById = wrap(async(req, res) => {
  console.log("GetWrestlerById: ", req.params)
  const returnedWrestler = await wrestler.getWrestlerById(req.params.wrestlerId)

  console.log("GetWrestlerById Done: ", returnedWrestler)
  res.json(returnedWrestler)
})