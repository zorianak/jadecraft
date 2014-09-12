function initSpells(charObj) {
    console.log(charObj)
    
    /****************************************************

    calculate and define the average weapon dps

    ****************************************************/

    avgWdps = function(){
        console.log('Mhdps ' + charObj["Mainhand"]["weaponInfo"]["damage"]["exactMax"]);
        
        if(charObj["Offhand"] != undefined) {
            var ohwdpsMax = charObj["Offhand"]["weaponInfo"]["damage"]["exactMax"];
            var ohwdpsMin = charObj["Offhand"]["weaponInfo"]["damage"]["exactMin"];
            var ohwspeed = charObj["Offhand"]["weaponInfo"]["weaponSpeed"];
           
            // so if we set this to a value, then we can just add 0 in later setps
            var avgOhdmg = (.25*(ohwdpsMax + ohwdpsMin)) / ohwspeed;
           } else {
             avgOhdmg = 0;  
           }
        
        var mhwdpsMax = charObj["Mainhand"]["weaponInfo"]["damage"]["exactMax"];
        var mhwdpsMin = charObj["Mainhand"]["weaponInfo"]["damage"]["exactMin"];
        var mhwspeed = charObj["Mainhand"]["weaponInfo"]["weaponSpeed"];
        
        // calculate mainhand damage
        var avgMhdmg = (.5*(mhwdpsMax + mhwdpsMin)) / mhwspeed;
        
        var damage = avgMhdmg + avgOhdmg;

        console.log('avgWdps ' + damage);

        return damage;
    }

    console.log('avgWdps ' + avgWdps());
    
    var stance = 1.1
    var ap = charObj["Attack Power"];
    var ifTp = false;

    // most spells aren't that special and don't need their own logic
    tigerpalm = new spell('physical', 3, ap, ifTp, stance, avgWdps());
    jab = new spell('physical', 1.15, ap, ifTp, stance, avgWdps());
    rsk = new spell('physical', 8, ap, ifTp, stance, avgWdps());
    expelHarm = new spell('nature', 0.6, ap, ifTp, stance, avgWdps());
    hurricaneStrike = new spell('physical', 2, ap, ifTp, stance, avgWdps());
    
    //FoF crap
    var fof = new spell('physical', 5.877, ap, ifTp, stance, avgWdps());

    var fofDmg = function() {
        var ticks = 5;
        var damage = fof.damage() * ticks;

        return damage;
    }
    
    // BoK crap
    var blackoutkick = new spell('physical', 5.375, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

    // for the dot

    var bokDot = .3;

    var bokDotDmg = function(){
        var damage = blackoutkick.damage() * bokDot;

        return damage;
    }
    
    // chex shit
    var chex = new spell('nature', 0.6, mhdps, avgWDps, ap, ifTp, stance, minWdps, maxWdps);

    var chexDotDmg = function() {
        var chexDot = .5;
        var damage = chex.damage() * chexDot;

        return damage;
    }
    
    function test() {
        var tpdmg = tigerpalm.damage();
        var rskdmg = rsk.damage();
        
        console.log('test ' + tpdmg + ', ' + rskdmg);
    }test();
}