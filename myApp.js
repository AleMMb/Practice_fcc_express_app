const path = require("path");
require('dotenv').config();

let express = require('express');
let app = express();

//midleware
app.use(function middleware(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use("/public" , express.static(path.join(__dirname +'/public')));

app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});


app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({"message": "HELLO JSON"});
  }else
  res.json({"message": "Hello json"});
});



 module.exports = app;
