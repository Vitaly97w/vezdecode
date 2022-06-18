const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

router.post('/', controller.auth)
router.post('/reg', controller.reg)
router.post('/about', controller.about)

module.exports = router
