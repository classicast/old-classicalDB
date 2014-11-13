module.exports = function(sequelize, DataTypes) {
  var recording = sequelize.define('recording', {
    fk_recording_performance: DataTypes.INTEGER,
    fk_recording_engineer: DataTypes.INTEGER,
    recording_type: DataTypes.STRING,
    recording_date: DataTypes.DATE,
    recording_location: DataTypes.STRING,
    recording_matrix_num: DataTypes.STRING
  });
  return recording;
};