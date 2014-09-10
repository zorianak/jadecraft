var chex = new spell('nature', 0.6, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

var chexDotDmg = function() {
    var chexDot = .5;
    var damage = chex.damage() * chexDot;
    
    return damage;
}