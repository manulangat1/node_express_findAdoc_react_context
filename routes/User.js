const express = require('express')
const { registerUser,loginUser , loadUser,logoutUser} = require('../controllers/User')
const auth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login/').post(loginUser)
router.route('/user/').get(auth,loadUser)
router.route('/logout/').post(auth,logoutUser)
module.exports = router