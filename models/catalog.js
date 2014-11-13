module.exports = function(sequelize, DataTypes) {
  var catalog = sequelize.define('catalog', {
    fk_catalog_composition: DataTypes.INTEGER,
    catalog_type: DataTypes.STRING,
    catalog_type_num: DataTypes.INTEGER,
    catalog_num: DataTypes.INTEGER
  });
  return catalog;
};