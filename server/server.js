const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const requireDir = require('require-dir')

// Start app
const app = express()
app.use(express.json()) // Allow json
app.use(cors()) // alow External acess of api

// Start dataBase mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Get all models from the models folder
requireDir('./src/models')


// Use routes
app.use('/api', require('./src/routes'))

// port
const port = 3333

//listen the app
app.listen(port, console.log(`Running server in port ${port}`))