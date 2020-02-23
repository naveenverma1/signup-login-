
const router = require('express').Router();

const Catagories = require('../models/catmodels')
const contrler = require('../controller/catcontroller')

router.post('/catagories', function(req, res) {
    contrler.cata(req, res);
  });



 module.exports = router;
// if(facebook) {return res.status(400).send('email  already exist')}
// else{


//     User.statics.createUser= function(cb){
//         var user = new this();
//         user.facebook= req.body.facebook
//         user.save(cb)
//     }
   
// }
// if(fbid) {return res.status(400).send('fbid  already exist')}
// else{
//     User.statics.createUser= function(cb){
//         var user = new this();
//         user.fbid= req.body.fbid
//         user.save(cb)
//     }
//     // User.insert({fbid}), function (err, small) {
//     //     if (err) return handleError(err);
//     // }
// }
// schema.statics.createUser = function(callback) {
//     var user = new this();
//     user.phone_number = "jgkdlajgkldas";
//     user.save(callback);
//   };