module.exports = function(sequelize, DataTypes) {
  var movement = sequelize.define('movement', {
    movement_num: DataTypes.INTEGER,
    movement_key: DataTypes.STRING,
    movement_tempo: DataTypes.STRING,
    movement_genre: DataTypes.STRING
  },{underscored: true, timestamps: false});
  return movement;
};