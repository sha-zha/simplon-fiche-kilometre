const path        = require('path');
const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
const { Sequelize } = require('sequelize');
const sqlite3 = require("sqlite3").verbose();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// Routes handler
const index = require('./routes/index');

/* variable initialisation's */
const router = {
  isStarted: false
};


/**
 * Starting web server on port 3000
 * 
 * When we start we create tables in database if not exist
 * @param {*} callback 
 */
function start(callback) {
  if (router.isStarted === false) {
    init(function () {

      // Handle routes function
      loadRoutes(function () {


            // starting web server
            http.listen(3000, function () {
              console.log('Application is running on port 3000');
              router.isStarted = true;
              if (typeof callback != 'undefined') {
                callback();
              }
            });

          // });
      });
    });
  } else {
    console.log("Application already started");
    if (typeof callback != 'undefined') {
      callback();
    }
  }
}


/**
 * Initialisation of view engine and others parameters
 * @param {*} callback 
 */
function init(callback) {

  /** view engine setup*/
  expressApp.set('views', path.join(__dirname, 'views'));
  expressApp.set('view engine', 'ejs');
  
  expressApp.use(express.json());
  expressApp.use(express.urlencoded({ extended: false }));
  expressApp.use(express.static(path.join(__dirname, 'public')));
  // Simple session
  expressApp.use(
  session({
    name: 'auth',
    secret: 'fiche-metier',
    resave: false,
    saveUninitialized: true
  })
);


  /* Keep server down */
  router.isStarted = false;
  if (typeof callback != 'undefined') {
    callback();
  }
}

/**
 * Route's management
 * @param {*} callback 
 */
function loadRoutes(callback) {
  expressApp.use("/", index);
  if (typeof callback != 'undefined') {
    callback();
  }
}

module.exports = {
  start: start
};