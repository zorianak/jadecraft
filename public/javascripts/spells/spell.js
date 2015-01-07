var Jadec = Jadec || {};
/***************************************************************

This is the base spell object. This is what all other spells 
inherit from.

***************************************************************/

Jadec.spell = {
    
    spell: function(school, coefficient, ap, ifTp, stance, avgWdps, cd){
        this.school = school;
    //    this.estimate = estimate;
        this.coefficient = coefficient;
        //!!! Defined in a global constant!!
        this.avgWdps = avgWdps;
        this.stance = stance;
        this.ap = ap;
        this.rskD = 1.1;
        this.cd = cd;
        this.vers = new stat(charObj["VersRating"], 130);

        if (this.school === 'physical') {
                if(ifTp){
                    this.armor = 0.726855;

                } else {
                    this.armor = 0.6506849;
                }

                // from:
                // https://docs.google.com/spreadsheets/d/1Nz81LRgnPmT1cAmShIX8emljDKFEOtDXw9IrGO9kJ8c/edit#gid=1356822350
            } else {
                this.armor = 1;
            }
    }

    spell.prototype = {

        damage: function(coefficient, stance, ap) {

            var dmg = this.coefficient * (this.avgWdps + this.ap/3.5) * this.armor * this.rskD * this.stance * (1 + (this.vers["rating"] * .01));

            return dmg;
        }
    }
}
