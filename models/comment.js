'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    description: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Beer, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    })
    Comment.belongsTo(models.User, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Comment;
};