'use strict';

module.exports = function(sequelize, DataTypes) {
  var label = sequelize.define('label', {
    label_name: DataTypes.STRING,
    label_defunct_date: DataTypes.INTEGER,
    label_country: DataTypes.STRING,
  },{underscored: true, timestamps: false});
  return label;
};
