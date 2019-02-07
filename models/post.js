'use strict';

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    title:       DataTypes.STRING,
    description: DataTypes.STRING,
    userId:      DataTypes.INTEGER,
    createdAt:   DataTypes.DATE,
    updatedAt:   DataTypes.DATE
  }, {});

  Post.associate = function(models) {
  };

  return Post;
};
