const {createServer} = require('http')
const compression    = require('compression')
const cors           = require('cors')
const express        = require('express')
const helmet         = require('helmet')
const morgan         = require('morgan')
const path           = require('path')

const database = require('./services/database')

const app = express()

app.set('port', process.env.KWC_LEAGUE_PORT || 6060)

app.use(helmet())
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
app.use(cors()) // TO DO Trim this down for security
app.use(compression())

app.use('/api', require('./routes/v1'))

app.use(express.static(path.resolve(__dirname, '../dist/')))

// Connect Database
database.connect()


//################################################################
//# Startup
//################################################################

const server = createServer(app)

console.log('APP - Starting Server on port', app.get('port'))

server.listen(app.get('port'))

console.log('APP - Server started on port %d in %s mode', app.get('port'), app.settings.env)

process
  .on('uncaughtException', uncaughtHandler)
  .on('unhandledRejection', uncaughtHandler)
  .on('SIGINT', disconnect)
  .on('SIGTERM', disconnect)

function uncaughtHandler(err) {
  console.error('Shutting Down. Reason: ', err)
  disconnect()
}

function disconnect() {
  Promise.all([database.disconnect()])
    .then(() => process.exit(0))
    .catch((e) => {
      console.error("Error Shutting disconnecting: ", e)
      process.exit(1)
    })
}