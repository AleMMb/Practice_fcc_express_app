const path = require("path");
const bodyParser = require("body-parser");
require('dotenv').config();

let express = require('express');
let app = express();

//midleware
app.use(function middleware(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use("/public" , express.static(path.join(__dirname +'/public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});


app.get("/:word/echo", function(req, res) {
  res.json({echo: req.params.word});
});




app.get("/name", function(req, res){
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({name: `${firstName} ${lastName}`});
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
