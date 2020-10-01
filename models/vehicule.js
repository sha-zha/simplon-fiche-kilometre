'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehicule = sequelize.define('vehicule', {
    marque: DataTypes.STRING,
    modele: DataTypes.STRING,
    puissance: DataTypes.STRING,
    annee: DataTypes.DATE,
    immatriculation : DataTypes.STRING
  }, {
  	tableName: 'vehicules',
    timestamps: false
  });
  vehicule.associate = function(models) {
    // associations can be defined here
  };
  return vehicule;
};