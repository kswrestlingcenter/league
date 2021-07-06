const wrestler = require('../services/wrestler')

exports.addWrestler = (req, res) => {
  console.log("Add Wrestler: ", req.body)
  wrestler.addWrestler(req.body)
  res.status(200).end()
}