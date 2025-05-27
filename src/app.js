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


connectionDB.then(()=>{
  console.log("database connected successfully...");
  app.listen(7777,(err,req,res,next)=>{
    console.log("server is running on port 7777");
    
  })
})
.catch(()=>{
  console.log("Database not connected...");
})
