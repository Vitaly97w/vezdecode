module.exports = {
  mongoURL:
    process.env.MONGO_URL ||
    'mongodb+srv://vital:spider45@cluster0.b3wzj.mongodb.net/vezdecode',
  port: process.env.PORT || 5000,
  jwt: process.env.JWT || "qwerty",
  email: process.env.EMAIL,
  password: process.env.PASSWD,
}
