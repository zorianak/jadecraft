/***************************************************************

This is the base spell object. This is what all other spells 
inherit from.

HUGE shoutout to Gahddo for helping with spell formula and
other explanations for this shiznap.

***************************************************************/
function spell(school, coefficient, ap, ifTp, stance, avgWdps){
    this.school = school;
//    this.estimate = estimate;
    this.coefficient = coefficient;
    //!!! Defined in a global constant!!
    this.avgWdps = avgWdps;
    this.stance = stance;
    
    if (this.school === 'physical') {
            if(ifTp){
                this.armor = 0.72685539403;
            } else {
                this.armor = 0.6506849315;
            }
            
            // from:
            // https://docs.google.com/spreadsheets/d/1Nz81LRgnPmT1cAmShIX8emljDKFEOtDXw9IrGO9kJ8c/edit#gid=1356822350
        }
    
}

spell.prototype = {
    
    damage: function(coefficient, stance, ap, armor) {
        console.log('cat');
        console.log('coeff ' + coefficient);
        console.log('stance ' + stance);
        console.log('ap ' + ap);
        console.log('armor ' + armor);
        
        console.log('ohdps ' + charObj.ohdps);
        
        if (charObj.ohdps == 0) {
            var dwMod = 1;
        } else {
            var dwMod = 0.898882;
        }
        var dmg = coefficient * stance * ( this.avgWdps * dwMod) + (ap/3.5);
        return dmg;
    }
}