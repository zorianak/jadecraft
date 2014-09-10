var fof = new spell('physical', 5.877, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

var fofDmg = function() {
    var ticks = 5;
    var damage = fof.damage() * ticks;
    
    return damage;
}