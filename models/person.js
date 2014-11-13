module.exports = function(sequelize, DataTypes) {
  var person = sequelize.define('person', {
    person_name_last: DataTypes.STRING,
    person_name_first: DataTypes.STRING,
    person_birthdate: DataTypes.DATE,
    person_birth_country: DataTypes.STRING,
    person_birth_city: DataTypes.STRING
  });
  return person;
};