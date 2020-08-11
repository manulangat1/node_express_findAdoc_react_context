const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:[true,'Kindly input a value']
    },
    password:{
        type:String,
        trim:true,
        required:[true,'Kindly input a value']
    },
    email:{
        type:String,
        trim:true,
        required:[true,'Kindly input a value']
    }
})

const User = mongoose.model('User',UserSchema)
module.exports = User