var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Aakaash's Developer Skills" });
});
router.get('/skills', skillsCtrl.index);

module.exports = router;
