const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
try {
  sequelize.authenticate();
  console.log('Connectioon.');
} catch (error) {
  console.error('Unable to connect to the database', error);
}
//model


const raison = require('../models').raisons;


controller.addRaison= async (req, res, next) => {

	const addRaison = await raison.create({label: req.body.raison});
	var select = await  raison.findAll({raw: true});

	res.render('liste',{title : 'la  liste', raison : select });
} 

/*
Function : Affiche la liste des raison
*/

controller.show = async(req,res,next ) =>{


 var select = await  raison.findAll({raw: true});

	res.render('liste',{title : 'la  liste', raison : select });
}
/*
Function : Affiche le formulaire pour update
*/

controller.update = async ( req,res,next) =>{
	
	var selectOne = await raison.findOne({
  order: ['id'], where:{id : req.params.id }, raw : true});


	res.render('update', {title : 'Edition', raison : selectOne })
}

/*
*fonction qui permet update
*/
controller.updateRaison = async (req, res, next) => {

	var label = req.body.raison ; 

	var update = await raison.update({ label: label }, 
		{ where: { id: req.params.id} });

	var select = await  raison.findAll({raw: true});

	res.render('liste',{title : 'la  liste', raison : select });
}
module.exports = controller;