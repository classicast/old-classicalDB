module.exports = function(sequelize, DataTypes) {
  var catalog = sequelize.define('catalog', {
    catalog_type: DataTypes.STRING,
    catalog_type_num: DataTypes.INTEGER,
    catalog_num: DataTypes.INTEGER
  },{underscored: true, timestamps: false});
  return catalog;
};