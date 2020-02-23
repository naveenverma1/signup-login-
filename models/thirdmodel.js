
const mongoose = require('mongoose');

const tCatagories = new mongoose.Schema({
   Buisnessname:{
type:String
},
domainname:{
   type:String
},

createdAt: 
{
    type: Date,
     default: new Date()
},
photos: {
    image:String
}
})
module.exports = mongoose.model('tcatagories',tCatagories);