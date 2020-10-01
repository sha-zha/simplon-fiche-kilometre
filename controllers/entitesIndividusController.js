const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');

//model
const entitesIndividu = require('../models').entitesIndividus;
const entites = require('../models').entite;
const individus = require('../models').individu;

controller.index = async(req,res) =>{
	var selectEntite =  await entites.findAll({raw:true});
	var selectIndividu = await individus.findAll({raw:true});

	res.render('affecte-entite',{title: 'affecter une entité', entite: selectEntite, individu: selectIndividu});
}

controller.add = async(req,res,next) =>{
	var selectEntite = req.body.entite;
	var selectIndividu = req.body.individu;

	//To do : verification 
	const addentiteIndividu = await entitesIndividu.create({
		id_individu: selectIndividu, id_entite: selectEntite
	});

	//To do : message flash 
	res.render('index', {title: 'ajout de raison'})
}

module.exports = controller; 