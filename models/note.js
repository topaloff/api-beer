'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    note: {type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 20
    }
  }
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
    Note.belongsTo(models.Beer, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    })
    Note.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Note;
};