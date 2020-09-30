'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raisons', {
    label: {
      type: DataTypes.STRING
    },

  }, {
    tableName: 'raisons',
    timestamps: false
  });
};