var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var mysql = require('mysql');
const fileUpload = require('express-fileupload');


 
var app = express(); 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

let http = require('http').Server(app);

var port = process.env.PORT || 8081;
 
http.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});


// import Modules/Controllers
var signup = require('./signup');


//connecting to DataBase
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'chatterbox'
});

//to connect to database.
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  
app.post('/signup', function(req, res) {
	signup.signup(req, res, con)
});