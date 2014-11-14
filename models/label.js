module.exports = function(sequelize, DataTypes) {
  var label = sequelize.define('label', {
    label_name: DataTypes.INTEGER,
    label_defunct_date: DataTypes.DATE,
    label_country: DataTypes.STRING,
  });
  return label;
};