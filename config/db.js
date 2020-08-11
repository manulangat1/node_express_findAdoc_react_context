const mongooose = require('mongoose')


const connectDB = async() => {
    try{
        const conn = await mongooose.connect(process.env.MONGO_URI,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`MongoDb connected on ${conn.connection.host}`.cyan.bold)
    } catch (err){
        console.log(`err:${err}`)
        process.exit(1)
    }
}
module.exports = connectDB