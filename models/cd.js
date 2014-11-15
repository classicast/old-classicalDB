module.exports = function(sequelize, DataTypes) {
  var CD = sequelize.define('CD', {
    cd_name: DataTypes.STRING,
    cd_release_date: DataTypes.STRING,
    cd_country: DataTypes.STRING,
    cd_total_discs: DataTypes.STRING,
    cd_total_tracks: DataTypes.STRING,
    cd_cover_image: DataTypes.STRING,
    cd_booklet: DataTypes.STRING,
    cd_booklet_text: DataTypes.STRING,
  }, {underscored: true});
  return CD;
};