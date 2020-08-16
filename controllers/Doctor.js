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

exports.postDoctor = async(req,res,next) => {
    try{
        const doctor = new Doctor({
            user:req.user,
            location:req.body.location,
            charges:req.body.charges
        }) 
        const doc = await doctor.save()
        res.status(201).json({
            success:true,
            data:doctor
        })
    } catch (err){
        console.log(`err:${err.message}`)
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}

exports.filterDoctor = async(req,res,next) => {
    try{
        const location= req.params.location
        const charges = req.params.charges

        const doctors = await Doctor.find({location,charges})
        if (doctors){
            res.status(200).json({
                success:true,
                count:doctors.length,
                data:doctors
            })
        }

    } catch (err){
        console.log(`err:${err.message}`)
        res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}