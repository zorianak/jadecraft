/***************************************************************

This is the base spell object. This is what all other spells 
inherit from.

HUGE shoutout to Gahddo for helping with spell formula and
other explanations for this shiznap.

***************************************************************/
function spell(school, coefficient, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps){
    this.school = school;
    this.estimate = estimate;
    this.coefficient = coefficient;
    this.avgWdps = avgWDps;
    this.stance = stance;
    this.minWdps = minWdps
    this.maxWdps = maxWdps;
    
    if (this.school = physical) {
            if(ifTp){
                this.armor = 0.72685539403;
            } else {
                this.armor = 0.6506849315;
            }
            
            // from:
            // https://docs.google.com/spreadsheets/d/1Nz81LRgnPmT1cAmShIX8emljDKFEOtDXw9IrGO9kJ8c/edit#gid=1356822350
        }
    
}

spell.prototype.twoHandDamage = function(coefficient, stance, ap, avgWdps, armor) {
    // credit to Gahddo
        var damage = coefficient * stance * ( (( avgWdps ) / 2 ) + ( ap / 3.5 ) );
        
        if(armor) {
            return damage * armor;
        } else{
            return damage;
        }
}

spell.prototype.dwDamage = function(coefficient, stance, ap, minWdps, maxWdps, armor){
        // more Gahddo creddit
        var dwMod = 0.898882275;
        var damage = coefficient * stance * ( ((( minWdps * 0.5 ) + ( maxWdps * 0.5 ) ) / 2 ) *  dwMod + ( ap / 3.5 ) );
    
        if(armor) {
            return damage * armor;
        } else{
            return damage;
        }
    }