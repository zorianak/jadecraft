/*******************************

add avgWdps to the actual charObj
This is cleaner so that we can 
access it later.

/*******************************/

var setAvgWdps = function(mhDPs, ohDps){
    var dwMod = 1;
    
    if(ohDps !== 0 ) {
        dwMod = 0.857143;
    }
    console.log(mhDPs);
    var damage = (parseFloat(mhDPs) + parseFloat(ohDps)/2) * dwMod;
    
    return damage;
}
