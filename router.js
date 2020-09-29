/* Appel de tous nos outils */
const express = require('express');
const app = express();
const http = require('http').Server(app);
 
const path = require('path');
const indexRouter = require('./routes/index');

    // EJS comme moteur de template 
    app.set('view engine', 'ejs');
 
    //nos fichiers côté client 
    app.use(express.static(path.join(__dirname, 'public')));
     
    //views est défini comme notre dossier de vues par défaut 
    app.set('views', path.join(__dirname, '/views/'));

    app.use('/', indexRouter);
    
/* Initialisation des variables */
const router = {
    isStarted: false
};
 
function start(callback) {
    if (router.isStarted === false) {
        init(function () {
            loadRoutes(function () {
                /* Lance le serveur web sur le port 3000 */
                http.listen(3000, function () {
                    console.log('Application is running on port 3000');
                    router.isStarted = true;
                    if (typeof callback != 'undefined') {
                        callback();
                    }
                });
            });
        });
    } else {
        console.log("Application already started");
        if (typeof callback != 'undefined') {
            callback();
        }
    }
}
 
function init(callback) {
    //On s'assure que le serveur n'est vraiment pas démarré 
    router.isStarted = false;
 
    //J'utilise ici EJS comme moteur de template 
    app.set('view engine', 'ejs');
 
    //assets sera le répertoire où se trouverons nos fichiers côté client 
    app.use(express.static(path.join(__dirname, 'public')));
     
    //views est défini comme notre dossier de vues par défaut 
    app.set('views', path.join(__dirname, '/views/'));
 
    if (typeof callback != 'undefined') {
        callback();
    }
}
 
//ROUTES 
 
function loadRoutes(callback) {
    // app.get('/', function (req, res) {
    //     res.render('index',{title :'rxpres welcome'});
    // });
 
    if (typeof callback != 'undefined') {
        callback();
    }
}
 
module.exports = {
    start: start
};
