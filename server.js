const express = require('express')
const app = express();

const authRoute = require('./routes/authroutes')
const catroute = require('./routes/catroutes')
const tcatagories = require('./routes/thirdroute')
const fourroute = require('./routes/fouroute')
var mongoose = require('mongoose');
var bodyparser = require('body-parser')
const cors = require('cors')

var path = require('path')


const dontenv = require('dotenv');
app.use(bodyparser.json())




mongoose.connect(process.env.dbconnect, {useNewUrlParser: true,useUnifiedTopology: true});

var urlencodedParser = bodyparser.urlencoded({ extended: false })
mongoose.connection.on('connected',()=>{
    console.log('connected to databaseat at this port')
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in database connection')
    } 
})
app.use('/api/user',catroute)
app.use('/api/user',authRoute)
app.use('/api/user', tcatagories)
app.use('/api/user',fourroute)
app.listen(3043,() => console.log('server is running on 3043'));

module.exports = app