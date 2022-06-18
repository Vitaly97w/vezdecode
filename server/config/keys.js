module.exports = {
  mongoURL:
    process.env.MONGO_URL,
  port: process.env.PORT || 5000,
  jwt: process.env.JWT,
  email: process.env.EMAIL,
  password: process.env.PASSWD,
}
