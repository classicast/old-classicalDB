var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var pg = require('pg');
var http = require('http');
var app = express();
var logger = require('morgan');
var router = express.Router();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', (process.env.PORT || 5000))
app.set('db', require('./models/modelsIndex'));

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(logger('short')); //Log all requests except static file requests
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//API Route Handling
// app.get('/api/userCheck', handlers.userCheck);
// app.get('/api/fetchData', handlers.fetchData);


var client = new pg.Client(process.env.DB_CONNECTION_STR || 'postgres://localhost/classicaldb');

// client.connect();

db.sequelize.sync({force: true}).complete(function(err) {
  if (err) {
    throw err[0]
  } else {
    http.createServer(app).listen(app.get('port'), function () {
      console.log('Express working and listening');
    });
  };
});

app.get('/', function(req, res) {
  console.log("sent!");
  res.sendFile('/public/index.html');
});

app.get('/db', function(req, res) {
  db.sequelize.query('SELECT * FROM labels').success(function(labels) {
    console.log("catalog data", labels);
    res.send(labels);
  })
  .error(function(err) {
    console.log(err);
  });
});

app.post('/', function(req,res){
  var labelName = req.body.labelName;
  var labelCountry = req.body.labelCountry;
  var labelDefunct = req.body.labelDefunct;
  db.label.create({  
    label_name: labelName,
    label_defunct_date: labelDefunct,
    label_country: labelCountry})
  .success(res.send(db.labels))
  .error(function(err) {
    console.log("nope", err);
  });
});
