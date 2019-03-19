const mongoose=require("mongoose");

const ContactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
})

const Contact=module.exports=mongoose.model("Contact",ContactSchema);