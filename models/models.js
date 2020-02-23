const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type :String,
        //required : true,
    },
    email: {
        type: String,
       //required : true,
       
    },
    password : {
        type : String,
       // required : true,       
    },
    phonenumber:{
        type : String,
        match: /^[0-9]{10}$/   
    },
    fbid: {
        id: String,
        
    },
    gid: {
        id: String,
       
    
    },
    facebook:{
email: String
    },
    google:{
        email: String
    },
    date : {
        type : Date,
        default :Date.now
    }
})
module.exports = mongoose.model('user',userSchema);
