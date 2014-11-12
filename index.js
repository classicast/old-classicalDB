var express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./models');
    pg = require('pg'),
    logger = require('morgan'),
    env = process.env.NODE_ENV || 'development',
    // requestHandler = require('./requestHandler'),
    // dbURL = 'postgres://warshguitsgtjr:iVBdRJrQ-syQ5xW1WbasAxW0s_@ec2-107-20-191-205.compute-1.amazonaws.com:5432/d85ejkgqeeomij',
    // config = common.config(),
    connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/d85ejkgqeeomij',


var app = express();
app.set('port', (process.env.PORT || 5000))

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(logger('short')); //Log all requests except static file requests
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//API Route Handling
// app.get('/api/userCheck', handlers.userCheck);
// app.get('/api/fetchData', handlers.fetchData);

// db.sequelize.sync().complete(function(err) {
//   if (err) {
//     throw err[0]
//   } else {
//     app.listen(app.get('port'), function(){
//       console.log('Express server listening on port ' + app.get('port'))
//     })
//   }
// })
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

app.get('/db', function (request, response) {
  pg.connect(connectionString, function(err, client, done) {
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

