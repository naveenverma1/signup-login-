const express = require('express')
const jwt =require("jsonwebtoken")
const router = express.Router();
const Use = require('../models/thirdmodel')


const dontenv = require('dotenv');
dontenv.config();

var thirdcontroller= {}

thirdcontroller.tcata =   function(req,res,next){
    const product = new Use(req.body);

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

module.exports = thirdcontroller;