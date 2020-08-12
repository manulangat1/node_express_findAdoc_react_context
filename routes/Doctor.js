const express = require('express')
const {getDoctor,postDoctor,filterDoctor} = require('../controllers/Doctor')
const auth = require('../middlewares/isAuth')

const router = express.Router()

router.route('/').get(auth,getDoctor).post(postDoctor)
router.route('/:location&:charges').get(filterDoctor)

module.exports = router 