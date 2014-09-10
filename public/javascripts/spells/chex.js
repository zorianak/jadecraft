var chex = new spell(nature, 0.6, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

var chexDotDmg = function() {
    var chexDot = .5;
    if(offhand) {
        var damage = fof.dwDamage() * chexDot;
    } else {
        var damage = fof.twoHandDamage() * chexDot;
    }
    
    return damage;
}