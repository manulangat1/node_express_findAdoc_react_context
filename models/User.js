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
    },
    isAdmin:{
        type:Boolean,
        required:[true,'Please input isAdmin'],
        default:false
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

UserSchema.pre('save',async function(next){
    //hash the password before saving the user 
    const user = this 
    if(user.isModified('password')){
        user.password =  await bcrypt.hash(user.password,8)
    }
})


UserSchema.methods.generateAuthToken = async function(){
    const user = this 
    const token = jwt.sign({_id:user._id},process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token 
}

UserSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}


const User = mongoose.model('User',UserSchema)
module.exports = User