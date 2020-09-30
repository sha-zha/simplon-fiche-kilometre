const path        = require('path');
const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();
//controllers
const individuController = require('../controllers/individuController');
const raisonController = require('../controllers/raisonController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express et electron' });
});

//ajout une raison
router.post('/addRaison',raisonController.addRaison);

//affiche les raison
router.get('/liste',raisonController.show);

//affiche le formulaire pour update
router.get('/update/:id',raisonController.update)

// update raison
router.post('/updateRaison/:id', raisonController.updateRaison)
module.exports = router;
