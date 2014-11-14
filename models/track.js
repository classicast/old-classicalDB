module.exports = function(sequelize, DataTypes) {
  var track = sequelize.define('track', {
    fk_track_recording: DataTypes.INTEGER,
    fk_track_cd: DataTypes.INTEGER,
    track_disc_number: DataTypes.INTEGER,
    track_number: DataTypes.INTEGER,
    fk_track_mastering_engineer: DataTypes.INTEGER,
    track_mastering_type: DataTypes.STRING,
    track_mastering_tech: DataTypes.STRING,
    track_length: DataTypes.STRING
  });
  return track;
};