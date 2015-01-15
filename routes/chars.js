var express = require('express'),
    router = express.Router(),
    npmarmory = require('npmarmory'),
    importChar = npmarmory.importChar,
    Char = npmarmory.Char;

//need theChar obj early
var theChar = "";

// defaults
var jadeRegion = "US";
var jadeName = "Caligraphy";
var jadeRealm = "Windrunner";



router.get('/', function(req, res) {
  //make some tmps to catch param data
  var tmpRealm, tmpRegion,tmpName;

  //populate param
  tmpRegion = ""+req.param("region");
  tmpName = ""+req.param("name");
  tmpRealm = ""+req.param("realm");

  // if param exist overwrite defaults
  if(tmpRegion && tmpRegion != "" && tmpRegion != "undefined"){
    jadeRegion = tmpRegion;
  };
  if(tmpName && tmpName != "" && tmpRegion != "undefined"){
    jadeName = tmpName;
  };
  if(tmpRealm && tmpRealm != "" && tmpRegion != "undefined"){
    jadeRealm = tmpRealm;
  };

  //call to npmarmory
  importChar(jadeRegion,jadeName,jadeRealm, function(data) {
    //get real char data
    theChar = new Char(data);

    //add params for output onto template
    theChar.jadeRegion = jadeRegion;
    theChar.jadeName = jadeName;
    theChar.jadeRealm = jadeRealm;
    
    // ps, never got console.log to work..  not sure what i did wrong
    // console.log("test"); never appeared anywhere
    // not the browser broser conslle nor the server itself
    // even though "night elf" from npmarmory does

  });

  //send to template...  i think
  res.render('char', { "theChar": theChar});
});

module.exports = router;
