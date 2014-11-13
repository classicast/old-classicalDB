if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize');

  if (process.env.DATABASE_URL) {
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

    var sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect: 'postgres',
      protocol: 'postgres',
      port: match[4],
      host: match[3],
      // logging: true // logger is deprecated
    });

    var models = [
    'cd'
    ];

    models.forEach(function(model) {
      module.exports[model] = sequelize.import(__dirname + '/' + model);
    });

  } else {
    sequelize = new Sequelize('local-sample', 'root', null)
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
  };

};

module.exports = global.db;
