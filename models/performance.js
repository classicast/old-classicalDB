module.exports = function(sequelize, DataTypes) {
  var performance = sequelize.define('performance', {
    fk_performance_movement: DataTypes.INTEGER,
    performance_setting: DataTypes.STRING
  });
  return performance;
};