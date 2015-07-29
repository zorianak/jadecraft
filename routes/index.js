var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to JadeCraft' });
});

module.exports = router;
