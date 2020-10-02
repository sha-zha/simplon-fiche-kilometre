const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');

//model
const raison = require('../models').raisons;


controller.add = async(req,res,next ) =>{

	res.render('ajout',{title : 'Ajouter une raison'});
}

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

controller.delete = async(req,res,next) =>{
	var id = req.params.id; 

	//to do verification 

	const sup = await raison.destroy({
	  where: {
	    id : id
	  }
	});

	res.render('index', {title: 'ajout une raison'})
}
module.exports = controller;