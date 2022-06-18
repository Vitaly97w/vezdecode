const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: String,
  surName: String,
  name: String,
  role: String,
  password: String,
  about: Object,
  isFirstAuth: Boolean
})

module.exports = model('users', schema)
