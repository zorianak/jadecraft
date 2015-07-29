/*******************************

add avgWdps to the actual charObj
This is cleaner so that we can 
access it later.

/*******************************/

var setAvgWdps = function(mhDPs, ohDps){
	
	console.log(ohDps);

    var dwMod = 1;
	var damage;
    
    // if your offhand's dmg is 0, then you are using a 2h.
    // So if it isn't 0, there's a DW modifier.
    if(ohDps !== "Not Available" ) {
        dwMod = 0.857143;
		
		damage = (parseFloat(mhDPs) + parseFloat(ohDps)/2) * dwMod;
    } else {
		damage = (parseFloat(mhDPs));
    }
    
    
    return damage;
}
