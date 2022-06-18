const Tech = require('../models/tech')
const keys = require('../config/keys')

module.exports.get = async function (req, res) {
 const tech = await Tech.find()
 res.send(tech)
}
module.exports.reg = async function (req, res) {

}
