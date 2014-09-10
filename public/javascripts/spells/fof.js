var fof = new spell(physical, 5.877, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

var fofDmg = function() {
    var ticks = 5;
    if(offhand) {
        var damage = fof.dwDamage() * ticks;
    } else {
        var damage = fof.twoHandDamage() * ticks;
    }
    
    return damage;
}