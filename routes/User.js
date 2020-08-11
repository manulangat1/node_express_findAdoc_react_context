const express = require('express')
const { registerUser,loginUser , loadUser} = require('../controllers/User')
const auth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login/').post(loginUser)
router.route('/user/').get(auth,isAdmin,loadUser)
module.exports = router