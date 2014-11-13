module.exports = function(sequelize, DataTypes) {
  var movement = sequelize.define('movement', {
    fk_movement_composition: DataTypes.INTEGER,
    movement_num: DataTypes.INTEGER,
    movement_key: DataTypes.STRING,
    movement_tempo: DataTypes.STRING,
    movement_genre: DataTypes.STRING
  });
  return movement;
};