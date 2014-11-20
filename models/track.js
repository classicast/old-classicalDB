module.exports = function(sequelize, DataTypes) {
  var track = sequelize.define('track', {
    track_disc_number: DataTypes.INTEGER,
    track_number: DataTypes.INTEGER,
    track_mastering_type: DataTypes.STRING,
    track_mastering_tech: DataTypes.STRING,
    track_length: DataTypes.STRING
  },{underscored: true, timestamps: false});
  return track;
};