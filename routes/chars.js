var express = require('express');
var router = express.Router();

/* GET chars listing. */
router.get('/', function(req, res) {
  res.render('char', { title: 'Character' });
});

module.exports = router;
