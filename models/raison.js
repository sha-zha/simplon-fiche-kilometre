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
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// const Raison = sequelize.define('Raison', {
//   // Model attributes are defined here
//   label: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   // Other model options go here
// });

// // `sequelize.define` also returns the model
// console.log(Raison === sequelize.models.Raison); 


// module.exports = (sequelize, DataTypes) => {

// const raison = sequelize.define('raison', {
//     label: DataTypes.STRING
//   }, {});

//   return raison;
// };

