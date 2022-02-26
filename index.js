// Importing all the modules


var express = require('express'); 
var fs = require('fs');
var app = express();
const port = process.env.PORT || 8080;



// Getting Time

const date = new Date()
let time = date.getTime()

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const d = new Date();
let years = Math.round(d.getTime() / year);



  



// Server

app.get('/', function(req, res) {
    res.sendFile('C:/Users/aqmer/OneDrive/Desktop/Codeathon/interactive/index.html');
  });

app.get('/quiz', function(req, res) {
    res.sendFile('C:/Users/aqmer/OneDrive/Desktop/Codeathon/quiz.html');
  });


  
app.listen(port)
console.log('Server started at http://localhost:' + port);
