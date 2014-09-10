var blackoutkick = new spell(physical, 5.375, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

// for the dot

var bokDot = .3;

var bokDotDmg = function(){
    if(offhand) {
        var damage = blackoutkick.dwDamage() * bokDot;
    } else {
        var damage = blackoutkick.twoHandDamage() * bokDot;
    }
    
    return damage;
}