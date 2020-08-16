const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB()
// import routes 
const User = require('./routes/User')


const app = express()
//body parser
app.use(express.json())
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

app.get('/',(req,res) => res.send("Hello"))
app.use('/auth/v1/',User)

const PORT = process.env.PORT

app.listen(PORT,console.log(`FindAdoc is running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))