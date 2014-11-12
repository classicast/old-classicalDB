var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg'),
var connectionString = 'postgres://qqpxuatnftvyqz:ZfsEjCpkpGtLgwQ5fE1a1AyCCp@ec2-54-163-249-168.compute-1.amazonaws.com:5432/d4uj91gp54rn5k';
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

// var client = new pg.Client({
//     user: "qqpxuatnftvyqz",
//     password: " ZfsEjCpkpGtLgwQ5fE1a1AyCCp",
//     database: "d4uj91gp54rn5k",
//     port: 5432,
//     host: "ec2-54-163-249-168.compute-1.amazonaws.com",
//     ssl: true
// }); 
// client.connect();

// var query = client.query('SELECT * FROM cd');
// query.on('row', function(row) {
//   console.log(JSON.stringify(row));
// });


// app.get('/db', function (request, response) {
//   var query = client.query('SELECT * FROM cd');
//   query.on('row', function(row) {
//     console.log(JSON.stringify(row));
//   });
//   done();
//   if (err) { 
//     console.error(err); response.send("Error " + err); 
//   }
//   else {
//     response.send(result.rows); 
//     console.log(result.rows + "results");
//   }
// });