let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home'});
  });
  
/* GET About Us page. */
router.get('/about', function(req, res, next) {
    res.render('About', { title: 'About'});
  });
  
/* GET Products page. */
router.get('/Projects', function(req, res, next) {
    res.render('Projects', { title: 'Projects'});
  });
  

/* GET Services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services'});
  });

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact'});
  });

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
