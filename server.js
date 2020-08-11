const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')

const app = express()
dotenv.config({path:'./config/config.env'})

if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

app.get('/',(req,res) => res.send("Hello"))

const PORT = process.env.PORT

app.listen(PORT,console.log(`FindAdoc is running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))