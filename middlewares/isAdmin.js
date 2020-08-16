const User = require('../models/User')

const isAdmin = async(req,res,next) => {
    try{
        if (req.user && req.user.isAdmin){
            next()
        } else {
            res.status(403).json({
                success:false,
                message:'You dont have permissions to view this file.'
            })
        }
    } catch (err){
        console.log(`err:${err}`.charCodeAt.bold)
        res.status(500).json({
            success:false,
            message:'Internal Server Error.'
        })
    }
}
module.exports = isAdmin