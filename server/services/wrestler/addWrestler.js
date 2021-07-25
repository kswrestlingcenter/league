const Wrestler = require('../../models/wrestler')

module.exports = async (wrestler) => {
  console.log("Adding wrestler inside the service: ", wrestler)

  if (wrestler.usawNumber) {
    const currentWrestler = await Wrestler.findOne({usawNumber: wrestler.usawNumber})
    console.log({currentWrestler})
    if (currentWrestler) return {error: new Error("Wrestler Already exists")}
  }

  const newWrestler = new Wrestler(wrestler)

  await newWrestler.save()

  console.log({newWrestler})

  return { wrestlerId: newWrestler._id }

}