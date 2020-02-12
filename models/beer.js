'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    degree: DataTypes.FLOAT,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
    Beer.belongsTo(models.Brewery, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
    Beer.belongsTo(models.Type, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    }),
    Beer.hasMany(models.Note);
    Beer.hasMany(models.Composition);
    Beer.hasMany(models.Comment);
  };
  return Beer;
};