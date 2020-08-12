const mongoose = require('mongoose')


const DoctorSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    location:{
        type:String,
        required:[true,'Kindly input a value']
    },
    charges:{
        type:Number,
        required:[true,'Kindly input a value']
    }
})

module.exports = mongoose.model('Doctor',DoctorSchema)