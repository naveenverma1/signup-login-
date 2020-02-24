const jwt = require("jsonwebtoken")

module.exports= function (req,res,next){


const token =req.header("auth-token");
    if (!token)  return res.status(400).send("access denied");

    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user= verified;
        next();

    }catch (err){
        //res.send(err)
        res.status(400).send('invalid token')
    }
}


// const Model=require("../models/signupmodel.js");

// var joi=require('joi')
// const Bcrypt = require("bcryptjs");


// console.log("welcome to controller method........")

// module.exports.Signup=function(req,res)
// {
//             console.log("enter in signup function....");

//             var body=req.body;
//             var key;
//             let flag=false;
//             for (key in body)
//             {
            
//                 if(key==="google_id"||key==="facebook_id")
//                            {
//                              flag=true;
//                              break;
//                            }
//             }
            
//             if(flag===true)
//             {
                
//                 if(req.body.email_id!=='')
//                 var email=req.body.email_id;
                
//                 Model.findOneAndUpdate(email,body,{upsert:true,lean:true,new:true},function(err,result)
//                 {
//                     if(err)
//                        {
//                            console.log("there is an err.....")
//                        }
//                     else
//                         {
//                             console.log(result)
//                             res.status(200).send(result);
//                         }   


//                 })
                
//             }

//             else  //flag==0
//                    {
//                      const schema=joi.object().keys(
//                         {
//                                  firstName:joi.string().required(),
//                                  email_id: joi.string().trim().email().required(),
//                                   password:joi.string().required(),
//                                   phone_number:joi.string().required()
//                         });

//                           joi.validate(body,schema,function(error,result1)
//                           {
//                               if(error)
//                                    {
//                                        res.status(400).json({"msg":"oops! error we have...",error})
//                                    }
//                                 else
//                                    {
//                                        console.log(result1)
//                                          result1.password=Bcrypt.hashSync(result1.password, 10)
//                                          var Data=new Model(result1);
                                        
//                                          Data.save(function(error,data1)
//                                         {
                                            
//                                              if(error)
//                                                   {
//                                                       console.log(error)
//                                                   }
//                                             else
//                                                 {
//                                                    console.log(data1)
//                                                    res.status(200).json({"msg":"successfully registered"})   
//                                                 }

//                                         })
//                                     }   
//                           })
//                    }



// }









// module.exports.Login=function(reqs,respo)
// {

//     console.log("enter in login function....");

//             var body=reqs.body;
//             console.log(body)
//             var key,google_id,facebook_id,email_id;
//             let flag=false;
//             for (key in body)
//             {
//                 console.log("in key")
//                 if(key==="google_id"||key==="facebook_id")
//                   {
//                       flag=true;
//                       break;
//                   }
//             }
//              console.log(flag,key)
//             if(flag==true)
//                {
//                   if((google_id!==''||facebook_id!=='')&&email_id!=='')
//                   {
//                              let email=reqs.body.email_id;
//                               Model.findOneAndUpdate(email,body,{upsert:true,lean:true,new:true},function(error,result)
//                                {
//                                     if(error)
//                                       {
//                                         console.log(error)
//                                       }
//                                  else
//                                     {
//                                        console.log('login successfully..')
//                                         respo.status(200).json({"msg":"login successfully",result});
//                                     }   
//                                })
//                     }  
                    
//                     else if((google_id==''||facebook_id=="")&&email_id!=='')
//                           {
//                               var google=reqs.body.google_id;
//                               var facebook=reqs.body.facebook_id;
//                               var email=reqs.body.email_id;
//                             Model.find({google,facebook},{lean:true},function(err,result5)
//                            {
//                             if (err){
//                                 console.log(err)
//                              respo.status(400).json({"msg":"err"},err)
//                             }
//                              else if (result5)
//                          {
//                              if(result5.email_id==email)
//                             {
//                               // delete data1.password
//                                respo.json({"msg":"login success"})
//                             }
                        
//                          }
                    
//                         else
//                         {
                                    
//                             Model.findOneAndUpdate(email,body,{upsert:true,new:true,lean:true},function(err,result6)
//                             {
//                                 if(error)
//                                       {
//                                         console.log(err)
//                                       }
//                                  else
//                                     {
//                                        console.log('login successfully..')
//                                         respo.status(200).json({"msg":"login successfully",result6});
//                                     }   
//                             })
//                        }

//                  })
//             }
                
//         }
//         else 
//             {
                
//             }}




// var body = req.body

// //console.log(key)
// console.log(req.body.email)
// console.log(body)
// var flag= false





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