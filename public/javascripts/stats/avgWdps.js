/*******************************

add avgWdps to the actual charObj
This is cleaner so that we can 
access it later.

/*******************************/

var setAvgWdps = function(charObj, itemObj){
    console.log('Mhdps ' + itemObj["Mainhand"]["weaponInfo"]["damage"]["exactMax"]);
        
    if(charObj["Offhand"] != undefined) {
        var ohwdpsMax = itemObj["Offhand"]["weaponInfo"]["damage"]["exactMax"];
        var ohwdpsMin = itemObj["Offhand"]["weaponInfo"]["damage"]["exactMin"];
        var ohwspeed = itemObj["Offhand"]["weaponInfo"]["weaponSpeed"];

        // so if we set this to a value, then we can just add 0 in later setps
        var avgOhdmg = (.25*(ohwdpsMax + ohwdpsMin)) / ohwspeed;
       } else {
         avgOhdmg = 0;  
       }

    var mhwdpsMax = itemObj["Mainhand"]["weaponInfo"]["damage"]["exactMax"];
    var mhwdpsMin = itemObj["Mainhand"]["weaponInfo"]["damage"]["exactMin"];
    var mhwspeed = itemObj["Mainhand"]["weaponInfo"]["weaponSpeed"];

    // calculate mainhand damage
    var avgMhdmg = (.5*(mhwdpsMax + mhwdpsMin)) / mhwspeed;

    var damage = avgMhdmg + avgOhdmg;
    
    charObj["avgWdps"] = damage;
}