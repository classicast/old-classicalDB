module.exports = function(sequelize, DataTypes) {
  var labelCode = sequelize.define('labelCode', {
    fk_ id_label: DataTypes.INTEGER,
    fk_id_cd: DataTypes.INTEGER,
    label_catalog: DataTypes.STRING,
    label_series: DataTypes.STRING,
  });
  return labelCode;
};