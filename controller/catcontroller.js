const express = require('express')
const jwt =require("jsonwebtoken")
const router = express.Router();
const User = require('../models/catmodels')


const dontenv = require('dotenv');
dontenv.config();

var thiscontroller= {}

thiscontroller.cata =   function(req,res,next){
    const product = new User(req.body);

     product.save( err => {
        if (err) 
        {
            res.json({"error": err});
        }
        else 
        {
            res.json({"status": "200"});
        }
    });

}

module.exports = thiscontroller;