'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Brewery.associate = function(models) {
    // associations can be defined here
    Brewery.belongsTo(models.Country, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
    Brewery.hasMany(models.Beer);
  };
  return Brewery;
};