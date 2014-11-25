/**
* Express Configuration
*/

'use strict';

var express     = require('express');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var compression = require('compression');
var favicon     = require('serve-favicon');
var path        = require('path');
var config      = require('./environment');

module.exports = function(app){
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json

  // if ('production' === env) {
  //   app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
  //   app.use(express.static(path.join(config.root, 'public')));
  //   app.set('appPath', config.root + '/public');
  //   app.use(morgan('dev'));
  // }

  if ('development' === env) {
    app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', config.root + '/client');
    app.use(morgan('dev'));
  }
};
