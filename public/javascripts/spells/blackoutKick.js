var blackoutkick = new spell('physical', 5.375, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

// for the dot

var bokDot = .3;

var bokDotDmg = function(){
    var damage = blackoutkick.damage() * bokDot;
    
    return damage;
}