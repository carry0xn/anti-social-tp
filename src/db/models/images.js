'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.belongsTo(models.Post, { foreignKey: 'postId' });
    }
  }

  Images.init({
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Image', 
  });

  return Images;
};
