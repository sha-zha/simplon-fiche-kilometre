const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

//model
const individus = require('../models').individu;


//liste des individus
controller.show = async (req, res, next ) =>{
	let liste = await individus.findAll({raw:true});

	res.render('liste-individu',{title: 'liste des individus', individu : liste});
}

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

//se connecter 

controller.login = async(req,res) =>{
	var email = req.body.email;
	var mdp = req.body.password;

	// to do : verification 

	const login = await individus.findOne({ 
		where:{email : email}, 
		 raw: true
	});
	console.log(login)
	if( login != null ){
		if(mdp == login.password){
			req.session.user = login.id; 

			console.log(req.session)
			return req.session.save(err => {
                res.redirect('/ajout');
            });
		}
	}
}

//déconnexion

controller.logout = (req, res, next) =>{
    req.session.destroy((err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
};
module.exports = controller;