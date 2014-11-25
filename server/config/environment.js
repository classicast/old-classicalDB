'use strict';

var path = require('path');
var _    = require('lodash');

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../..'),

  // Server port
  port: process.env.PORT || 5000,

  // Secret for session, you will want to change this and make it an environment variable
  // secrets: {
  //   session: 'classicaldb-secret'
  // },

  // List of user roles
  // userRoles: ['guest', 'user', 'admin'],
};

var envConfig = {};

// Production specific configuration
// =================================
envConfig.production = {
  // Server port
  port: process.env.PORT || 8080,

  // Should we populate the DB with sample data?
  seedDB: false,

  // PostgreSQL connection options
  postgres: {
    uri: process.env.POSTGRES_URI,
  }
};


// Development specific configuration
// ==================================
envConfig.development = {
  // Should we populate the DB with sample data?
  seedDB: true,

  // PostgreSQL connection options
  postgres: {
    dbname: 'classicaldb_dev',
    username: 'classicaldb',
    password: null
  }
};


// Test specific configuration
// ===========================
envConfig.test = {
  // Should we populate the DB with sample data?
  seedDB: false,

  // PostgreSQL connection options
  postgres: {
    dbname: 'classicaldb_test',
    username: 'classicaldb',
    password: null
  }
};


// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, envConfig[process.env.NODE_ENV]);
