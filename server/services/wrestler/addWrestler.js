const Wrestler = require('../../models/wrestler')

module.exports = async (wrestler) => {
  console.log("Adding wrestler inside the service: ", wrestler)

  const currentWrestler = await Wrestler.findOne({usawNumber: wrestler.usawNumber})

  console.log({currentWrestler})

  if (currentWrestler) return currentWrestler

  const newWrestler = new Wrestler(wrestler)

  await newWrestler.save()

  console.log({newWrestler})

  return newWrestler

}