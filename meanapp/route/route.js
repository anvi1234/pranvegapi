const express=require('express');
const router=express.Router();
const Contact=require("../modals/contact");

router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
   
});

router.post("/contacts",(req,res,next)=>{
     let newContact=new Contact({
         name:req.body.name,
         email:req.body.email,
         mobile:req.body.mobile
     });
     newContact.save((err,contact)=>{
         if(err){
             res.json({msg:"Failed to add contact"});
         }
         else{
             res.json({msg:"Contact added Successful"});
         }
     });
  

});

router.delete("/contacts",(req,res,next)=>{
    Contact.remove({id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});



module.exports=router;