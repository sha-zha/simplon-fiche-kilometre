'use strict';
module.exports = (sequelize, DataTypes) => {
  const entitesIndividus = sequelize.define('entitesIndividus', {
    id_individu : DataTypes.INTEGER,
    id_entite :DataTypes.INTEGER  
  }, {
  	tableName: 'entitesIndividus',
    timestamps: false
  });
  entitesIndividus.associate = function(models) {
    // associations can be defined here
  };
  return entitesIndividus;
};