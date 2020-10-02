'use strict';
module.exports = (sequelize, DataTypes) => {
  const fiche = sequelize.define('fiche', {
    id_individu: DataTypes.INTEGER,
    id_vehicule : DataTypes.INTEGER,
    id_raison :DataTypes.INTEGER,
    depart : DataTypes.INTEGER,
    arrivee: DataTypes.INTEGER,
    distance :DataTypes.INTEGER,
    totalkm :DataTypes.INTEGER,
    commentaire : DataTypes.STRING,
    dateDepart :DataTypes.DATE,
    indemnisation : DataTypes.INTEGER

  }, {
  	tableName: 'fiches',
    timestamps: false
  });
  fiche.associate = function(models) {
    // associations can be defined here
  };
  return fiche;
};