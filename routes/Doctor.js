const express = require('express')
const {getDoctor,postDoctor} = require('../controllers/Doctor')
const auth = require('../middlewares/isAuth')

const router = express.Router()

router.route('/').get(auth,getDoctor).post(postDoctor)

module.exports = router 