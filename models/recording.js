module.exports = function(sequelize, DataTypes) {
  var recording = sequelize.define('recording', {
    recording_type: DataTypes.STRING,
    recording_date: DataTypes.DATE,
    recording_location: DataTypes.STRING,
    recording_matrix_num: DataTypes.STRING
  });
  return recording;
};