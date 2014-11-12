var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg'),
var connectionString =  process.env.DATABASE_URL;
var logger = require('morgan');

var app = express();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', (process.env.PORT || 5000));

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(logger('short')); //Log all requests except static file requests
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//API Route Handling
// app.get('/api/userCheck', handlers.userCheck);
// app.get('/api/fetchData', handlers.fetchData);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

var connection = new pg.Client(connectionString);
// Connect PostgreSQL

app.get('/db', function (request, response) {
  connection.connect(connectionString, function(err, client, done) {
    client.query('SELECT * FROM catalog', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); 
      console.log(result.rows + "results");
     }
    });
  });
});