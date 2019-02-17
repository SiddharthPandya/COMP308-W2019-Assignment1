let express = require('express');
let router = express.Router();

/*   File: index.ejs(Routes)
     Siddharth Pandya
     300915041
     2019-02-16 */

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// POST Redirects contact page to Home when submit button clicked
// User redirected to home page by clicking submit
router.post('/contact', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
