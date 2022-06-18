const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/downloads')
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    cb(null, `${date}-${file.originalname}`)
  },
})

const fileFilter = (req, file, cb) => {
  console.log(file)
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'video/mp4' ||
    file.mimetype === 'video/avi' ||
    file.mimetype === 'video/mkv'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const limits = {
  fileSize: 5000 * 5000 * 5000,
}

module.exports = multer({
  storage,
  fileFilter,
  limits,
})
