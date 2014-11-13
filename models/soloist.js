module.exports = function(sequelize, DataTypes) {
  var soloist = sequelize.define('soloist', {
    fk_soloist_performer: DataTypes.INTEGER,
    fk_soloist_performance: DataTypes.INTEGER,
    soloist_type: DataTypes.STRING
  });
  return soloist;
};