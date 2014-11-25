/**
* Main Application File
*/

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var http    = require('http');
var express = require('express');
var config  = require('./config/environment');

// Setup server
var app = module.exports = express(); //now app.js can be required to bring app into any file
var server = http.createServer(app);

// Connect to database and expose sequelize singleton
/*
Multiple calls to require('foo') may not cause the module code to be executed
multiple times. (...) Modules are cached based on their resolved filename.
Since modules may resolve to a different filename based on the location of the
calling module (loading from node_modules folders), it is not a guarantee that
require('foo') will always return the exact same object, if it would resolve to
different files.

That means that using require('./models') to get the models may create more
than one connection to the database. To avoid that, the models variable must be
somehow singleton-esque. This can be easily achieved, if you're using a framework
like expressjs, by attaching the models module to the application:

app.set('models', require('./models'));

And when you need to require a class of the model in a controller, use this
application setting rather than a direct import:

var User = app.get('models').User;
*/
app.set('database', require('./config/database'));
var database = app.get('database');

//Configure express and routes
require('./config/express')(app);
require('./routes')(app);


// Populate DB with sample data
// if(config.seedDB) { require('./config/seed')(models); }


//Create Database Connection
database.sequelize.sync()
.then(function() {
  //Start server
  server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
})
.catch(function(error){
  console.log(error);
});
