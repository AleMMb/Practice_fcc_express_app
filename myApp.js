let express = require('express');
let app = express();


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});



console.log("Hello");




































 module.exports = app;
