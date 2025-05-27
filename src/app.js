const express = require("express");

const app = express();

const {authToken} = require('./middalwares/auth')
app.use("/user",authToken)

app.get("/user/getAlldata",(req,res)=>{
  res.send("get all data")
})


app.get("/admin/getAlldata",(req,res)=>{
  res.send("get all admin data")
})


app.post("/user/updateData",(req,res)=>{
  res.send("data update successfully...")
})


app.post("/admin/updateData",(req,res)=>{
  res.send("admin data update successfully...")
})

// app.use("/test", (req, res) => {
//   console.log("hello test test test");

//   res.send("hello test test test");
// });

app.listen(7777, () => {
  console.log("your server is stareted successfully on port 7777...");
});
