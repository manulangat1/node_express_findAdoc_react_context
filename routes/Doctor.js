const express = require('express')
const {getDoctor,postDoctor,filterDoctor} = require('../controllers/Doctor')
const auth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const router = express.Router()

router.route('/').get(getDoctor).post(isAdmin,postDoctor)
router.route('/:location&:charges').get(filterDoctor)

module.exports = router 