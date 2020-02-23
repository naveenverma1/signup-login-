const express = require('express')

const router = express.Router();
const Us = require('../models/fourmodel')
const dontenv = require('dotenv');
dontenv.config();

var fourcontroller= {}

fourcontroller.four =   function(req,res,next){
    const product = new Us(req.body);

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

module.exports = fourcontroller;