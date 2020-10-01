'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehiculesIndividus = sequelize.define('vehiculesIndividus', {
    id_individu : DataTypes.INTEGER,
    id_vehicule :DataTypes.INTEGER  
  }, {
  	tableName: 'vehiculesIndividus',
    timestamps: false
  });
  vehiculesIndividus.associate = function(models) {
    // associations can be defined here
  };
  return vehiculesIndividus;
};