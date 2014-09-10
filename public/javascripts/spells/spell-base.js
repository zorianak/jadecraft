function spellBase(school, coefficient, mhdps, Mhdps, ap){
    this.school = school;
    this.estimate = estimate;
    this.coefficient = coefficient;
    
    this.twoHandDamage = function() {
        var minDmg = coefficient * mhdps + (ap/3.5);
        var maxDmg = coefficient * Mdps + (ap/3.5);
    }
}