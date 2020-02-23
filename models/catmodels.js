


const mongoose = require('mongoose');

const Catagories = new mongoose.Schema({
   catagories:{
type:String
},
subcatagories:[{
   type:String
}],
Status:
{
    type:String,
    enum:['active','inactive','delete'],
    default:"active"
},
createdAt: 
{
    type: Date,
     default: new Date()
}
})
module.exports = mongoose.model('catagories',Catagories);