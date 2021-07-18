const LeagueEvents = require('../server/models/leagueEvent')
const database = require('../server/services/database')

function disconnect(exitStatus = 0) {
  Promise.all([
    database.disconnect(),
  ]).then(() => {
    process.exit(exitStatus)
  }).catch((e) => {
    console.error("Error Shutting disconnecting: ", e)
    process.exit(1)
  })
}

function run() {
  Promise.all([
    database.connect()
  ]).then(async () => {
    const eventCount = await LeagueEvents.count()
    console.log(`Found ${eventCount} events to delete`)
    await LeagueEvents.deleteMany({})
    disconnect()
  }).catch((e) => {
    console.error(e)
    disconnect(1)
  })
}

run()
