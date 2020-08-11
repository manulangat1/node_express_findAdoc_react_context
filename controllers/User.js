const mongoose = require('mongoose')
const User = require('../models/User')
const { sendEmail } = require('../utils/emails')

exports.registerUser = async(req,res,next) => {
    try{
        const { email,username,password,isAdmin } = req.body 
        const user = await User.create(req.body)
        const token = await user.generateAuthToken()
        const mail = {
            to:`${user.email}`,
            subject:"hey",
            text:"Hey uo"
        }
        sendEmail(mail)
        res.status(201).json({
            success:true,
            data:user,
            token:token
        })
    } catch  (err){
        console.log(`err:${err.message}`)
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}


exports.loginUser = async(req,res,next) => {
    try{
        const {  email,password } = req.body 
        const user = await User.findByCredentials(email,password)
        const token = await user.generateAuthToken()
        res.status(200).json({
            success:true,
            data:user,
            token:token
        })
    } catch (err){
        console.log(`err:${err.message}`)
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}