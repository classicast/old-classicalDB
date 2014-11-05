var express = require('express');
var bodyParser = require('body-parser');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
app.set('port', (process.env.PORT || 5000))

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
if (process.env.NODE_ENV !== 'production') {
  var logger = require('morgan');
  app.use(logger('short')); //Log all requests except static file requests
}
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//API Route Handling
// app.get('/api/userCheck', handlers.userCheck);
// app.get('/api/fetchData', handlers.fetchData);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
