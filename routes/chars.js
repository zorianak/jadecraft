var express = require('express'),
    router = express.Router(),
    npmarmory = require('npmarmory'),
    importChar = npmarmory.importChar,
    Char = npmarmory.Char;

// defaults
var regionDefault = "US",
  nameDefault = "Calligraphy",
  realmDefault = "Stormreaver";

var charImporting = function(req, res) {
//	console.log(req);

  // if param exist overwrite defaults
  // I think only (tmp != "undefined") works too
  var charRegion = req.tmpRegion || regionDefault,
	  charName = req.tmpName || nameDefault,
	  charRealm = req.tmpRealm || realmDefault;

  //call to npmarmory
  importChar(charRegion, charName, charRealm, function(data) {
	  
    //get real char data
    var theChar = new Char(data);

    //add 'test' params for output onto template
    theChar.jadeRegion = charRegion;
    theChar.jadeName = charName;
    theChar.jadeRealm = charRealm;
	  

    // my tester output text zone
    theChar.tester = "";
    theChar.tester += "charRegion: "+req.tmpRegion+" \n";
    theChar.tester += "charName: "+req.tmpName+" \n";
    theChar.tester += "charRealm: "+req.tmpRealm+" \n";

    //send to template...  i think
    res.render('char', { "theChar": theChar});

  });
};


// Wait until a req object exists to do anything
router.get('/', function(req, res) {

  //populate param
  req.tmpRegion = ""+req.param("region");
  req.tmpName = ""+req.param("name");
  req.tmpRealm = ""+req.param("realm");

  //fire off importChar with params
  charImporting(req, res);

});


router.post('/', function(req, res) {

  //populate POST
  req.tmpRegion = ""+req.param("charRegion");
  req.tmpName = ""+req.body.charName;
  req.tmpRealm = ""+req.body.charRealm;

  //fire off importChar with POST
  charImporting(req, res);

});

module.exports = router;