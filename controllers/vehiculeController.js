const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');

//model
const vehicules = require('../models').vehicule;

controller.vehicule = async(req,res,net) =>{
res.render('vehicule',{title: ' vehicule'})
}

//ajout un vehicule
controller.addVehicule = async(req,res,net) =>{
	var marque = req.body.marque;
	var modele = req.body.modele; 
	var puissance = req.body.puissance;
	var immatriculation = req.body.immatriculation;
	var annee = req.body.annee;

	//TO DO : verification 

	const addVehicule = await vehicules.create({
		marque:marque,modele:modele,puissance:puissance,immatriculation:immatriculation,annee:annee
	});

	// To do : message flash

	res.render('index', {title : 'ajout raison'});

}

controller.show = async (req,res) =>{
	var select = await vehicules.findAll({raw:true});

	console.log(select)

	res.render('liste-vehicule', {title: 'liste véhicule', vehicule: select });
}
module.exports = controller;