'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsTo(models.Post, { foreignKey: 'postId' });
      // Relación N:M con Post a través de PostTag
      Tag.belongsToMany(models.Post, {
        through: models.PostTag,
        foreignKey: 'tagId',
        otherKey: 'postId'
      });
    }
  }
  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};