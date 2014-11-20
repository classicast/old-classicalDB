var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var pg = require('pg');
var http = require('http');
var app = express();
var logger = require('morgan');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', (process.env.PORT || 5000))
app.set('db', require('./models/modelsIndex'));

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(logger('short')); //Log all requests except static file requests
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//API Route Handling
// app.get('/api/userCheck', handlers.userCheck);
// app.get('/api/fetchData', handlers.fetchData);


var client = new pg.Client(process.env.DB_CONNECTION_STR || 'postgres://localhost/classicalDB');

// client.connect();

db.sequelize.sync({force: false}).complete(function(err) {
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
  res.sendFile('/public/dbTestPage.html');
});

app.get('/db', function(req, res) {
  db.sequelize.query('SELECT * FROM catalogs').success(function(catalogs) {
    console.log("catalog data", catalogs);
    res.send(catalogs);
  })
  .error(function(err) {
    console.log(err);
  });
});
