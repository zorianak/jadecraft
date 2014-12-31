/*******************************

add avgWdps to the actual charObj
This is cleaner so that we can 
access it later.

/*******************************/

var setAvgWdps = function(charObj, itemObj){ 
    var mhavgDps = itemObj["Mainhand"]["weaponInfo"]["dps"];
    var ohavgDps = itemObj["Offhand"]["weaponInfo"]["dps"];
    var dwMod = 0;
    
    if(ohavgDps !== 0 ) {
        dwMod = 0.857143;
    }
    
    var damage = (mhavgDps + ohavgDps/2) * dwMod;
    
    charObj["avgWdps"] = damage;
}