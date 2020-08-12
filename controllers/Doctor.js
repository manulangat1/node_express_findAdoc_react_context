const mongoose = require('mongoose')
const Doctor = require('../models/Doctor')

exports.getDoctor = async(req,res,next) => {
    try{
        const doctors = await Doctor.find()
        res.status(200).json({
            success:true,
            count:doctors.length,
            data:doctors
        })
    } catch (err){
        console.log(`err:${err.message}`)
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}