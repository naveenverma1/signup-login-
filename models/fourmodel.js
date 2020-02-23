
const mongoose = require('mongoose');

const Four= new mongoose.Schema({
   mystores:[{
type:String
}],
onboardstores:[{
   type:String
}],

createdAt: 
{
    type: Date,
     default: new Date()
}
})
module.exports = mongoose.model('stores',Four);