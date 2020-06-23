var os = require("os");
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var hostname = os.hostname();
var name = hostname ; 
app.set("view engine", "ejs"); 


app.set("views", __dirname + "/views"); 

app.use(bodyParser.urlencoded({ extended: false })); 

app.get("/", (req, res) => { res.render("index",{ name:name } ) }); 

/*
app.get('/main', function(req, res) {

    var name = 'hello';
  
    res.render(__dirname + "index.html", {name:name});
  
  });
*/
app.listen(3000, () => {
    console.log('Server is starting at port 3000.')
  })

//http module 

/*
http.createServer(function (req, res) {
    res.write(hostname); //write a response to the client
    res.end(); //end the response
  }).listen(3000);
*/

//console.log(hostname);