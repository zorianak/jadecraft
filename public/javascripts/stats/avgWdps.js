/*******************************

add avgWdps to the actual charObj
This is cleaner so that we can 
access it later.

/*******************************/

var setAvgWdps = function(mhDPs, ohDps){
    var dwMod = 1;
    
    // if your offhand's dmg is 0, then you are using a 2h.
    // So if it isn't 0, there's a DW modifier.
    if(ohDps !== 0 ) {
        dwMod = 0.857143;
    }
    var damage = (parseFloat(mhDPs) + parseFloat(ohDps)/2) * dwMod;
    
    return damage;
}
