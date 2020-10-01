const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');

//model
const entites = require('../models').entite;

/*
*ajouter une entite
*/
controller.addEntite = async(req,res,next) => {
	console.log(req.body)

	//to do : verifier vide + verfier string
	let type = req.body.type;
	let nom = req.body.nom;

	var addEntite = await entites.create({type_entite: type, nom : nom }) 

	//to do : message flash
	console.log('entité bien créee')
	res.render('index', {title: 'ajout raison '})
}

//form d'entite

controller.entite = async(req,res,net) =>{
res.render('entite',{title: ' entité'})
}

module.exports = controller;