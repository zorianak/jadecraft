function initSpells() {
    
    /****************************************************

    calculate and define the average weapon dps

    ****************************************************/

    avgWdps = function(){
        if(charObj.ohdps === 0) {
            var damage = 300.4;
        } else {
            var damage = 350.1;
        }

        console.log(damage);

        return damage;
    }

    console.log('avgWdps ' + avgWdps());
    
    var stance = 1.1
    var ap = charObj["Attack Power"];
    var ifTp = true;

    // most spells aren't that special and don't need their own logic
    tigerpalm = new spell('physical', 3, ap, ifTp, stance, avgWdps());
//    jab = new spell('physical', 1.15, ap, ifTp, stance, avgWdps());
//    rsk = new spell('physical', 8, ap, ifTp, stance, avgWdps());
//    expelHarm = new spell('nature', 0.6, ap, ifTp, stance, avgWdps());
//    hurricaneStrike = new spell('physical', 2, ap, ifTp, stance, avgWdps());
    
    function test() {
        var dmg = tigerpalm.damage();
        
        console.log('test ' + dmg);
    }test();
}