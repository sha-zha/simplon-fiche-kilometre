const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');

//model
const vehiculesIndividu = require('../models').vehiculesIndividus;
const vehicules = require('../models').vehicule;
const individus = require('../models').individu;

controller.vehiculeIndividu = async(req,res) =>{
	var selectVehicule =  await vehicules.findAll({raw:true});
	var selectIndividu = await individus.findAll({raw:true});

	console.log(selectIndividu)
	res.render('affecte-vehicule',{title: 'affecter un véhicule', vehicule: selectVehicule, individu: selectIndividu});
}

controller.add = async(req,res,next) =>{
	var selectVehicule = req.body.vehicule;
	var selectIndividu = req.body.individu;

	//To do : verification 
	const addvehiculeIndividu = await vehiculesIndividu.create({
		id_individu: selectIndividu, id_vehicule: selectVehicule
	});

	//To do : message flash 
	res.render('index', {title: 'ajout de raison'})
}

module.exports = controller; 