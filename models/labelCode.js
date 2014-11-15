module.exports = function(sequelize, DataTypes) {
  var labelCode = sequelize.define('labelCode', {
    label_catalog: DataTypes.STRING,
    label_series: DataTypes.STRING,
  });
  return labelCode;
};