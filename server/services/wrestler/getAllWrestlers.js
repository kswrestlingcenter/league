const Wrestler = require("../../models/wrestler")
module.exports = async () => {
  const wrestlerList = await Wrestler.find()
  console.log("from service", {wrestlerList})
  return wrestlerList
}