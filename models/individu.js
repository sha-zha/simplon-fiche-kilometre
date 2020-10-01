'use strict';
module.exports = (sequelize, DataTypes) => {

const individu = sequelize.define('individu', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: DataTypes.STRING,
    fonction: DataTypes.STRING
  }, 
  {
    tableName: 'individus',
    timestamps: false
  });
  individu.associate = function(models) {
    // associations can be defined here
  };
  return individu;
};