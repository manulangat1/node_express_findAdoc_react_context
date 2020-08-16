const jwt = require('jsonwebtoken')
const User = require('../models/User')






const auth = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const data = jwt.verify(token,process.env.JWT_KEY)
        const user = await User.findOne({_id:data._id,'tokens.token':token})
        // console.log(`user:${user}`)
        if (!user){
            res.status(401).json({
                message:"Unauthorised"
            })
        }
        req.user = user 
        req.token = token 
        next()
    } catch (err){
        res.status(401).json({
            error:"Unauthorised"
        })
        // process.exit(1)
    }
}




// const auth = async(req,res,next) => {
//     try{
//         const token = req.header('Authorization').replace('Bearer','')
//         console.log(token)
//         const data = jwt.verify(token,process.env.JWT_KEY)
//         console.log(data)
//         // const user = await User.findOne({_id:data._id,'tokens.token':token})
//         const user = await User.findOne({_id:data._id,'tokens.token':token})
//         if (!user){
//             res.status(401).json({
//                 success:false,
//                 message:'Not authenticated, login to view this page'
//             })
//         } else{
//             req.user = user 
//             req.token = token 
//             next()
//         }
//     } catch(err){
//         console.log(`err:${err}`)
//         res.status(401).json({
//             success:false,
//             message:'Not authenticated, login to view this page'
//         })
//     }
// }
module.exports = auth