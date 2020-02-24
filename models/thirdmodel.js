
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












// maincontroller.sav = function(req,res,next){

//    var body = req.body
   
//    //console.log(key)
   
//    var flag= false
//    for (key in body)
//    {
   
//        if(key==="gid"||key==="fbid")
//                   {
//                     flag=true;
//                     break;
//                   }
//    } 
//    if(flag===true){
   
//    const emailexist =  User.findOne({email:req.body.email})
//    if(emailexist) return res.status(400).send('email  exist')
//    const goo = new User(req.body);
   
//    goo.save( err => {
//        try{
//            const saveduser= user.save();
//            res.send({user : user._id});
   
//        }catch (err){
//            res.status(400).send(err);
//        }
//    });
   
                  
//           }       else
//    {
   
//    const{error} = registerValidation(req.body);
//    if(error) 
//    return res.status(400).send(error.details[0].message)
   
   
//    // const gid = await User.findOne({gid:req.body.gid})
//    // const facebook = await User.findOne({facebook:req.body.facebook})
//    // const fbid = await User.findOne({facebook:req.body.fbid})
//    // const google = await User.findOne({google:req.body.google})
   
   
   
//    // if(fbid) {return res.status(400).send('fbid  already exist')}
//    // else{
   
//    //     User.create(req.body, function (err, small) {
//    //         if (err) return handleError(err);
//    //     })
//    // }
//    const emailexist =  User.findOne({email:req.body.email})
//    if(emailexist) return res.status(400).send('email  already exist')
   
   
//    const salt =  bcrypt.genSalt(10);
   
//    const hashPassword =  bcrypt.hash(req.body.password,salt)
   
//        const user = new User({
//          name : req.body.name,
   
   
//          email : req.body.email,
//          password : hashPassword,
//          phonenumber : req.body.phonenumber,
//         // fbid : req
        
//         //date :  req.body.date
//         })
        
//        try{
//            const saveduser= user.save();
//            res.send({user : user._id});
   
//        }catch (err){
//            res.status(400).send(err);
//        }
//    } 
//    }