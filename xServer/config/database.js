const mongoose = require('mongoose')

const handleFailure = (err) => {
  console.log("There was an error", err)
  return process.exit(1)
}


module.exports = {
  connect: () => {
    const connection = mongoose.connection

    mongoose.set('useUnifiedTopology', true)

    mongoose.connection.on("error", handleFailure)
    mongoose.connection.on("open", () => {
      console.log(`MongoDB connected to[-- ${connection.db.databaseName} --]`)
    })

    mongoose.connect(process.env.MONGO_CLIENT_KWC, { useNewUrlParser : true } )
  },
  disconnect: async () => await mongoose.disconnect()
}

