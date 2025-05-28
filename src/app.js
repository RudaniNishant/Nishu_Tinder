const express = require("express");
const app = express();
const connectionDB = require('./config/database');
const User = require("./model/user")

app.use(express.json());

app.post("/signup", async (req,res)=>{
  const user = new User(req.body);
  try{
    await user.save();
    res.send("data added successfully...")
  }catch(err){
    res.status(400).send("data cannot stored...")
  }
})

app.post("/user",async (req,res)=>{
  try{    
    const user = await User.findOne({emailId : req.body.emailId})
  if(!user){
    res.status(404).send("user not found");
  }else{
    res.send(user);
  }  
  }catch(err){
    console.log(err);
    
    res.status(400).send("something went wrong")
  }
  
})

app.get("/feed",async (req,res)=>{
  try{    
    const user = await User.find({})
  if(!user){
    res.status(404).send("user not found");
  }else{
    res.send(user);
  }  
  }catch(err){    
    res.status(400).send("something went wrong")
  }
  
})

app.post("/userbyid",async (req,res)=>{
  try{
    const user = await User.findById(req.body._id)
    if(!user){
    res.status(404).send("user not found");
  }else{
    res.send(user);
  }  
  }catch(err){    
    console.log(err);
    
    res.status(400).send("something went wrong")
  }
})

app.delete("/deleteuserbyid",async (req,res)=>{
  try{
    const user = await User.findByIdAndDelete(req.body._id)
    if(!user){
    res.status(404).send("user not found");
  }else{
    res.send("user deleted duccessfully...");
  }  
  }catch(err){    
    console.log(err);
    
    res.status(400).send("something went wrong")
  }
})

app.patch("/updateUser",async (req,res)=>{
  try{
    const user = await User.findByIdAndUpdate(req.body.userId,req.body,{
      runValidators : true
    })
    if(!user){
    res.status(404).send("user not found");
  }else{
    res.send("user updated duccessfully...");
  }  
  }catch(err){    
    console.log(err);
    
    res.status(400).send("something went wrong")
  }
})





connectionDB.then(()=>{
  console.log("database connected successfully...");
  app.listen(7777,(err,req,res,next)=>{
    console.log("server is running on port 7777");
    
  })
})
.catch(()=>{
  console.log("Database not connected...");
})
