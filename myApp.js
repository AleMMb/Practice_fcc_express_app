const path = require("path");

let express = require('express');
let app = express();

//midleware
app.use("/public" , express.static(path.join(__dirname +'/public')));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});


app.get("/json", function(req, res) {
  res.json({"message": "Hello json"});
});



 module.exports = app;
