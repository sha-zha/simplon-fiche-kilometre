'use strict';
module.exports = (sequelize, DataTypes) => {
  const entite = sequelize.define('entite', {
    type_entite: DataTypes.STRING,
    nom: DataTypes.STRING
  }, {
  	tableName: 'raisons',
    timestamps: false
  });
  entite.associate = function(models) {
    // associations can be defined here
  };
  return entite;
};