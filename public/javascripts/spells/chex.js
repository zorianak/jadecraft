/*******************************************

This spell is "special" and gets its own file
because it more or less follows its own set
of rules as far as the fact that its damage
is increased by the amount of chi used. Likely
will need to add another function to its
prototype in order to add this effect + add in
its TeB stacking effect.

/*******************************************/

var chex = new Jadec.spell('nature', 0.6,ap, ifTp, stance, avgWdps, 1);

var chexDotDmg = function() {
    var chexDot = .5;
    var damage = chex.damage() * chexDot;

    return damage;
}
