const express = require('express')
const jwt =require("jsonwebtoken")
const router = express.Router();
const User = require('../models/models')
const bcrypt = require('bcryptjs')
//var Joi = require('@hapi/joi');
const verify = require('../verifytoken')
const dontenv = require('dotenv');
dontenv.config();
var user
const {registerValidation,loginValidation} = require('../validation');

var maincontroller= {}

maincontroller.sav = async function(req,res,next){
const{error} = registerValidation(req.body);
if(error) 
return res.status(400).send(error.details[0].message)

const emailexist = await User.findOne({email:req.body.email})
// const gid = await User.findOne({gid:req.body.gid})
// const facebook = await User.findOne({facebook:req.body.facebook})
// const fbid = await User.findOne({facebook:req.body.fbid})
// const google = await User.findOne({google:req.body.google})



// if(fbid) {return res.status(400).send('fbid  already exist')}
// else{

//     User.create(req.body, function (err, small) {
//         if (err) return handleError(err);
//     })
// }
   
if(emailexist) return res.status(400).send('email  already exist')


const salt = await bcrypt.genSalt(10);

const hashPassword = await bcrypt.hash(req.body.password,salt)

     user = new User({
      name : req.body.name,


      email : req.body.email,
      password : hashPassword,
      phonenumber : req.body.phonenumber,
      fbid : req
     
     //date :  req.body.date
     })
    
    try{
        const savedUser =await user.save();
        res.send({user : user._id});

    }catch (err){
        res.status(400).send(err);
    }
   
}
// login
maincontroller.logi = async function(req,res){
    const{error} = loginValidation(req.body);
    if(error) 
    return res.status(400).send(error.details[0].message)

    const user = await User.findOne({email:req.body.email})
if(!user) return res.status(400).send('email  is not found')
const validPass = await bcrypt.compare(req.body.password,user.password)

if(!validPass) return res.status(400).send("invalid password")

//crATE AND ASSIGN TOKEN

// const token = await jwt.sign({_id : user._id},process.env.TOKEN_SECRET)
// res.header("auth-token", token).send(token);

res.send("logged in")
}


// maincontroller.data = verify, async function(req,res)
//     { 
//     res.json({
//         posts:{
//             title:"my first post",
//         discription : "random data you not acess" }
//     })
// }

module.exports = maincontroller;