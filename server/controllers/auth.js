const Users = require('../models/user')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

module.exports.auth = async function (req, res) {
  let email = req.body.email.toLowerCase()
  const candidate = await Users.findOne({ email: email })
  if (candidate) {
    //Пользователь сцществует
    const passwordResult = req.body.password == candidate.password
    if (passwordResult) {
      //Генерируем токен, пароли совпали
      const token = jwt.sign(
        {
          id: candidate._id,
          email: candidate.email,
          role: candidate.role,
          surname: candidate.surName,
          name: candidate.name,
          isFirstAuth: candidate.isFirstAuth
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      )
      //Отправляем токен
      res.status(200).send({
        token: `Bearer ${token}`,
      })
    } else {
      //Пароли не совпали
      res.status(401).send()
    }
  } else {
    //Пользователя нет
    res.status(404).send()
  }
}
module.exports.reg = async function (req, res) {
  let email = req.body.email.toLowerCase()
  const findcand = await Users.find({email: email})
  if(findcand.length == 0){
    const cand = new Users({
      surName: req.body.surname,
      name: req.body.name,
      email: email,
      password: req.body.password,
      role: req.body.role,
      isFirstAuth: true,
      about: {}
    })
    await cand.save()
    res.status(200).send("ok")
  }
  else{
    res.status(409).send('no')

  }
}
module.exports.about = async function (req, res) {
  let email = req.body.user.email.toLowerCase()
  await Users.updateOne({_id: req.body.user.id},{$set:{
    email: email,
    about: req.body.about,
    isFirstAuth: false
  }})
  res.status(200).send("ok")
}
