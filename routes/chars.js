var express = require('express'),
    router = express.Router(),
    npmarmory = require('npmarmory'),
    importChar = npmarmory.importChar,
    Char = npmarmory.Char;

// defaults
var jadeRegionDefault = "US";
var jadeNameDefault = "Caligraphy";
var jadeRealmDefault = "Windrunner";

// pre-declare empty so we know where values came from
var jadeRegion, jadeName, jadeRealm;


// Wait until a req object exists to do anything
router.get('/', function(req, res) {
  //make some tmps to catch param data
  var tmpRealm, tmpRegion,tmpName;

  //populate param
  tmpRegion = ""+req.param("region");
  tmpName = ""+req.param("name");
  tmpRealm = ""+req.param("realm");

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


    // If theChar doesn't have a property (eg. Offhand weapon) then 500 error
    // also, any not-found error will cause this, so every visible prop needs defaults
    // unless ofc there's some node thing I dont know about
    if("Offhand" in theChar){
      theChar.tester += "Offhand: "+String(theChar.Offhand);
      if(String(theChar.Offhand) == "No Item"){
        theChar.tester += " No Item Detected ";
        theChar.Offhand = new Object("No Item");
        theChar.Offhand.weaponInfo = new Object("No Item");
        theChar.Offhand.weaponInfo.dps = 0.0;
      }
    }

    //send to template...  i think
    res.render('char', { "theChar": theChar});

  });

});

module.exports = router;

/*

Successfully found non-default character

http://jadecraft.yourcompusolutions.com:3000/chars?region=us&name=Pridemist&realm=Ragnaros

*/


/*
// for reference:

importChar('US', 'Caligraphy', 'Windrunner', function(data) {

    // now send them to the page?
    router.get('/', function(req, res) {
      var theChar = new Char(data);
      res.render('char', { "theChar": theChar });
    });
});


*/