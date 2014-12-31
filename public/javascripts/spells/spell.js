/***************************************************************

This is the base spell object. This is what all other spells 
inherit from.

HUGE shoutout to Gahddo for helping with spell formula and
other explanations for this shiznap.

***************************************************************/
function spell(school, coefficient, ap, ifTp, stance, avgWdps, cd){
    this.school = school;
//    this.estimate = estimate;
    this.coefficient = coefficient;
    //!!! Defined in a global constant!!
    this.avgWdps = avgWdps;
    this.stance = stance;
    this.ap = ap;
    this.rskD = 1.1;
    this.cd = cd;
    
    if (this.school === 'physical') {
            if(ifTp){
                this.armor = 0.726855;
        
            } else {
                this.armor = 1 - (1938 / (1938 + 3610));
            }
            
            // from:
            // https://docs.google.com/spreadsheets/d/1Nz81LRgnPmT1cAmShIX8emljDKFEOtDXw9IrGO9kJ8c/edit#gid=1356822350
        } else {
            this.armor = 1;
        }
    
}

spell.prototype = {
    
    damage: function(coefficient, stance, ap) {
        
        if (charObj.ohdps == 0) {
            var dwMod = 1;
        } else {
            var dwMod = 0.857143;
        }
        console.log(this.armor);
        var dmg = this.coefficient * (this.avgWdps + this.ap/3.5) * dwMod * this.armor * this.rskD;
        if(dwMod !== 1) {
//            dmg = dmg / 1.5;
        }
        return dmg;
    }
}