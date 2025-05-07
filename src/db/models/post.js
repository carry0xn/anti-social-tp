'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId' });
      Post.hasMany(models.Image, { foreignKey: 'postId' });
      Post.hasMany(models.Comment, { foreignKey: 'postId' });
      // Relación N:M con Tag a través de PostTag
      Post.belongsToMany(models.Tag, {
        through: models.PostTag,
        foreignKey: 'postId',
        otherKey: 'tagId'
      });
    }
  }

  Post.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: DataTypes.DATE,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};
