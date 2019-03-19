//importing module
var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors=require("cors");
var path=require("path");

var app=express();

const route=require("./route/route");


//connection
mongoose.connect("mongodb://localhost:27017/meanapp");

mongoose.connection.on("connected",()=>{
    console.log("connected to database");
})

mongoose.connection.on("error",(err)=>{
    if(err){
        console.log("err");
    }
    else{
    console.log(" not connected to database");
    }
})

//port no.
const port = 8900;

//adding middleware =cors
app.use(cors());
// bodyparser

app.use(bodyparser.json());







app.use("/api",route);

//testing  route
app.get('/',(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log("server startes a port:",+port);
});