var express = require('express'),
    router = express.Router(),
    npmarmory = require('npmarmory'),
    importChar = npmarmory.importChar,
    Char = npmarmory.Char;

// let's see if we can break node here.  ._. prelim logic
// to import my monk

importChar('US', 'Caligraphy', 'Windrunner', function(data) {

    // now send them to the page?
    /* GET chars listing. */
    router.get('/', function(req, res) {
      var theChar = new Char(data);
      console.log(theChar);
      res.render('char', { "theChar": theChar });
    });
});

module.exports = router;
