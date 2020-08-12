const express = require('express')
const {getDoctor} = require('../controllers/Doctor')

const router = express.Router()

router.route('/').get(getDoctor)

module.exports = router 