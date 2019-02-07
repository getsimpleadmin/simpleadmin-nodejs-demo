'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    login: DataTypes.STRING
  }, {});

  User.associate = function(models) {
  };

  return User;
};
