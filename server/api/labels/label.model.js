'use strict';

module.exports = function(sequelize, DataTypes) {
  var Label = sequelize.define('label', {
    label_name: DataTypes.STRING,
    label_defunct_date: DataTypes.INTEGER,
    label_country: DataTypes.STRING,
  },{underscored: true, timestamps: false});
  return Label;
};
