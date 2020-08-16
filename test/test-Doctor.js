process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const Doctor = require('../models/Doctor')
const dotenv = require('dotenv')
const colors = require('colors')
const request = require('request')
// dotenv.config({path:'../config/config.env'})
// dotenv.config({path:'./config/config.env'})

//the dev dependancies 
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)

//our parent block 

describe('Doctors', () => {
    beforeEach((done) => {
        console.log("hey")
        done()
    })
    describe('/GET Doctors',() => {
        it('Should Get all the books',(done) => {
            chai.request('localhost:5000')
                .get('/api/v1/doctors/')
                .then( res => {
                    res.should.have.status(200);
                    res.body.should.be.a('Object')
                    console.log(res)
                    done()
                })
                .catch(err => console.log(err))
        })

    })
    describe('/GET filter a doc', () => {
        it('Should GET doctors based on a filter',(done) => {
            chai.request('localhost:5000')
                .get('/api/v1/doctors/kco&4000')
                .then( res => {
                    res.should.have.status(200)
                    done()
                })
                .catch(err => console.log(err))
        })
    })
})