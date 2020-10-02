const path        = require('path');
const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();

//controllers
const individuController = require('../controllers/individuController');
const raisonController = require('../controllers/raisonController');
const entiteController = require('../controllers/entiteController');
const vehiculeController = require('../controllers/vehiculeController');
const vehiculeIndividuController = require ('../controllers/vehiculeIndividuController');
const entitesIndividusController = require('../controllers/entitesIndividusController');
const ficheController = require('../controllers/ficheController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express et electron' });
});

//login
router.post('/login', individuController.login);

//form ajout raison
router.get('/ajout', raisonController.add); 

//ajout une raison
router.post('/addRaison',raisonController.addRaison);

//affiche les raison
router.get('/liste',raisonController.show);

//affiche le formulaire pour update
router.get('/update/:id',raisonController.update)

// update raison
router.post('/updateRaison/:id', raisonController.updateRaison)

//affiche form pour ajouter une entite
router.get('/entite', entiteController.entite)

//ajout une entite
router.post('/addEntite',entiteController.addEntite)

//affiche form pour ajouter vehicule 
router.get('/vehicule', vehiculeController.vehicule)

//ajout un véhicule 
router.post('/addVehicule',vehiculeController.addVehicule)

// liste vehicule

router.get('/liste-vehicule', vehiculeController.show);

//affiche un form pour ajouter individu
router.get('/individu',individuController.individu);

//ajout un individu
router.post('/addIndividu',individuController.addIndividu);

//form affecte vehicule
router.get('/affecteVehicule', vehiculeIndividuController.vehiculeIndividu);

//ajout affectation vehicule
router.post('/affecteVehicule', vehiculeIndividuController.add);

//form affectation entite
router.get('/affecteEntite',entitesIndividusController.index);

//ajout affectation entite
router.post('/affecteEntite', entitesIndividusController.add);

//delete raison
router.get('/delete/raison/:id', raisonController.delete);

//get fiche
router.get('/fiche',ficheController.show)

//deco
router.get('/logout',individuController.logout)

//ajax fiche 
router.post('/ajax', ficheController.total)
module.exports = router;
