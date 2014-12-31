function initSpells(charObj) {
    
    /****************************************************
    calculate and define the average weapon dps
    ****************************************************/
    
    var stance = 1.05;
    var ap = charObj["Attack Power"];
    var ifTp = true;
    var avgWdps = charObj["avgWdps"];
    var rskDebuf = 1.1;

    // most spells aren't that special and don't need their own logic
    tigerpalm = new spell('physical', 3, ap, ifTp, stance, avgWdps, 1);
    jab = new spell('physical', 1.15, ap, ifTp, stance, avgWdps, 1);
    rsk = new spell('physical', 8, ap, ifTp, stance, avgWdps, 1);
    expelHarm = new spell('nature', 0.6, ap, ifTp, stance, avgWdps, 1);
    hurricaneStrike = new spell('physical', 2, ap, ifTp, stance, avgWdps, 45);
    
    //FoF crap
    var fof = new spell('physical', 7.755, ap, ifTp, stance, avgWdps, 25);

    var fofDmg = function() {
        var ticks = 1;
        var damage = fof.damage() * ticks;

        return damage;
    }
    
    // BoK crap
    var blackoutkick = new spell('physical', 5.375, ap, ifTp, stance, avgWdps, 1);

    var bokDot = .3;

    var bokDotDmg = function(){
        var damage = blackoutkick.damage() * bokDot;

        return damage;
    }
    
    // chex shit
    var chex = new spell('nature', 0.6,ap, ifTp, stance, avgWdps, 1);

    var chexDotDmg = function() {
        var chexDot = .5;
        var damage = chex.damage() * chexDot;

        return damage;
    }
}