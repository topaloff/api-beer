'use strict';
module.exports = (sequelize, DataTypes) => {
  const Composition = sequelize.define('Composition', {
    percent: DataTypes.FLOAT
  }, {});
  Composition.associate = function(models) {
    // associations can be defined here
    Composition.belongsTo(models.Beer, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    })
    Composition.belongsTo(models.Ingredient, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Composition;
};