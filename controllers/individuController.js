const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');

//model
const individus = require('../models').individu;

controller.individu = async(req,res,next) =>{
	res.render('individu', {title: 'créer un individu'})
}

//ajout un individu
controller.addIndividu = async(req,res,next) =>{
	var nom = req.body.nom;
	var prenom = req.body.prenom;
	var email = req.body.email;
	var password = req.body.password;
	var fonction = req.body.fonction;

	//TO do : verification 

	const addIndividu = await individus.create({
		nom:nom,
		prenom:prenom,
		email:email,
		password:password,
		fonction:fonction,
		roles:'user' 
	})
	console.log(req.body)
	//to do : message flash 
	console.log('individu bien ajouté')
}

module.exports = controller;