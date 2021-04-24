const {createServer} = require('http')
const cors           = require('cors')
const express        = require('express')
const helmet         = require('helmet')
const morgan         = require('morgan')
const path           = require('path')

const connectDatabase = require('./config/database').connect

const app = express()

app.set('port', process.env.KWC_LEAGUE_PORT || 6060)

app.use(helmet())
app.use(cors()) // TO DO Trim this down for security
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, '../dist/')))

// Connect Database
connectDatabase()


//################################################################
//# Startup
//################################################################

const server = createServer(app)

console.log('APP - Starting Server on port', app.get('port'))

server.listen(app.get('port'))

console.log('APP - Server started on port %d in %s mode', app.get('port'), app.settings.env)

process.on('uncaughtException', shutdown)
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

function shutdown(err) {
  console.error('Shutting Down. Reason: ', err)
  return process.exit()
}