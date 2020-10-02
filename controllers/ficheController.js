const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');

//model
const fiches = require('../models').fiche;
const individus = require('../models').individu;
const vehicules = require('../models').vehicule;
const raisons = require('../models').raisons;

controller.show = async(req,res) =>{
	var selectIndividu = await individus.findAll({raw:true});
	var selectVehicule = await vehicules.findAll({raw: true});
	var selectRaison = await raisons.findAll({raw: true});

	res.render('fiche', 
		{title: 'ajout fiche admin', 
		individu: selectIndividu, 
		vehicule : selectVehicule, 
		raison : selectRaison })
}

controller.total = async(req,res) =>{
	// var individu = req.body.individu;
	// var vehicule = req.body.vehicule;

	// var total = await fiches.findAll({
	// 	where: {id_individu : individu, id_vehicule : vehicule }, raw:true
	// })
	// console.log(total)

const {individu, vehicule} = req.body
console.log(req.body.individu)

}

module.exports = controller;