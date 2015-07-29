var express = require('express'),
    router = express.Router(),
    npmarmory = require('npmarmory'),
    importChar = npmarmory.importChar,
    Char = npmarmory.Char;

// defaults
var jadeRegionDefault = "US",
  jadeNameDefault = "Caligraphy",
  jadeRealmDefault = "Windrunner";

// pre-declare empty so we know where values came from
var jadeRegion, jadeName, jadeRealm;

var charImporting = function(req, res) {

  //catch tmps from param or POST
  var tmpRealm = req.tmpRealm, 
    tmpRegion = req.tmpRegion,
    tmpName = req.tmpName;

  // if param exist overwrite defaults
  // I think only (tmp != "undefined") works too
  if(tmpRegion && tmpRegion != "" && tmpRegion != "undefined"){
    jadeRegion = tmpRegion;
  }else{
    jadeRegion = jadeRegionDefault;
  };
  if(tmpName && tmpName != "" && tmpRegion != "undefined"){
    jadeName = tmpName;
  }else{
    jadeName = jadeNameDefault;
  };
  if(tmpRealm && tmpRealm != "" && tmpRegion != "undefined"){
    jadeRealm = tmpRealm;
  }else{
    jadeRealm = jadeRealmDefault;
  };

  //call to npmarmory
  importChar(jadeRegion,jadeName,jadeRealm, function(data) {
    //get real char data
    var theChar = new Char(data);

    //add 'test' params for output onto template
    theChar.jadeRegion = jadeRegion;
    theChar.jadeName = jadeName;
    theChar.jadeRealm = jadeRealm;

    // my tester output text zone
    theChar.tester = "";
    theChar.tester += "charRegion: "+req.tmpRegion+" \n";
    theChar.tester += "charName: "+req.tmpName+" \n";
    theChar.tester += "charRealm: "+req.tmpRealm+" \n";


    // If theChar doesn't have a property (eg. Offhand weapon) then 500 error
    // also, any not-found error will cause this, so every visible prop needs defaults
    // unless ofc there's some node thing I dont know about
    if("Offhand" in theChar){
      theChar.tester += "Offhand: "+String(theChar.Offhand);
      if(String(theChar.Offhand) == "No Item"){
        // theChar.tester += " No Item Detected ";
        theChar.Offhand = new Object("No Item");
        theChar.Offhand.weaponInfo = new Object("No Item");
        theChar.Offhand.weaponInfo.dps = 0.0;
      }
    }

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







/*

Successfully found non-default character

http://jadecraft.yourcompusolutions.com:3000/chars?region=us&name=Pridemist&realm=Ragnaros

*/


/*
// for reference:

importChar('US', 'Calligraphy', 'Stormreaver', function(data) {

    // now send them to the page?
    router.get('/', function(req, res) {
      var theChar = new Char(data);
       console.log(theChar);
      res.render('char', { "theChar": theChar });
    });
});


*/
