const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cors = require('cors')
const bodyParser = require('body-parser')
//роуты
const auth = require('./routes/auth')
const tech = require('./routes/tech')
const app = express()

mongoose
  .connect(keys.mongoURL)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: '*',
  })
)

app.use('/auth', auth)
app.use('/tech', tech)
app.use(express.static('uploads'))

module.exports = app
