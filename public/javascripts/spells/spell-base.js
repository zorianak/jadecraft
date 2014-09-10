/***************************************************************

This is the base spell object. This is what all other spells 
inherit from.

HUGE shoutout to Gahddo for helping with spell formula and
other explanations for this shiznap.

***************************************************************/
function spellBase(school, coefficient, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps){
    this.school = school;
    this.estimate = estimate;
    this.coefficient = coefficient;
    this.avgWdps = avgWDps;
    this.stance = stance;
    this.minWdps = minWdps
    this.maxWdps = maxWdps;
    
    if (this.school = physical) {
            if(ifTp){
                var armor = 0.72685539403;
            } else {
                var armor = 0.6506849315;
            }
            
            // from:
            // https://docs.google.com/spreadsheets/d/1Nz81LRgnPmT1cAmShIX8emljDKFEOtDXw9IrGO9kJ8c/edit#gid=1356822350
        }
    
    this.twoHandDamage = function() {
        // credit to Gahddo
        var damage = this.coefficient * this.stance * ( (( avgWdps ) / 2 ) + ( ap / 3.5 ) );
        
        if(armor) {
            return damage * armor;
        } else{
            return damage;
        }
    }
    
    this.dwDamage = function(){
        // more Gahddo creddit
        var dwMod = 0.898882275;
        var damage = this.coefficient * this.stance * ( ((( this.minWdps * 0.5 ) + ( this.maxWdps * 0.5 ) ) / 2 ) *  dwMod + ( ap / 3.5 ) );
        if(armor) {
            return damage * armor;
        } else{
            return damage;
        }
    }
}