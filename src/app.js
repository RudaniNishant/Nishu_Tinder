const express = require("express");

const app = express();

app.use("/he", (req, res) => {
  res.send("hello hello hello");
});

app.use("/test", (req, res) => {
  console.log("hello test test test");

  res.send("hello test test test");
});

app.listen(7777, () => {
  console.log("your server is stareted successfully on port 7777...");
});
