const Wrestler = require("../../models/wrestler")
module.exports = async (wrestlerId) => {
  const wrestler = await Wrestler.findById(wrestlerId)
  return wrestler
}