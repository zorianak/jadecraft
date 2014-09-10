function initSpells(charObj) {
    console.log(charObj)
    
    /****************************************************

    calculate and define the average weapon dps

    ****************************************************/

    avgWdps = function(){
        console.log('Mhdps ' + charObj["Mdps"]);
        if(charObj.ohdps === 0) {
            var damage = ((charObj["Mdps"] + charObj["mdps"]) /2) / charObj["mhs"];
        } else {
            var mhs = charObj["mhs"] * (1+((charObj["Haste"]/425) * 0.01));
            var damage = (((charObj["Mdps"] + charObj["mdps"]) /2) / mhs) + .5*(((charObj["Ohdps"] + charObj["ohdps"]) /2) / charObj["ohs"]);
//            var damage = (((26397 + 14213) /2) / mhs) + .5*(((charObj["Ohdps"] + charObj["ohdps"]) /2) / charObj["ohs"]);

        }

        console.log('avgWdps ' + damage);

        return damage;
    }

    console.log('avgWdps ' + avgWdps());
    
    var stance = 1.1
    var ap = charObj["Attack Power"];
    var ifTp = true;

    // most spells aren't that special and don't need their own logic
    tigerpalm = new spell('physical', 3, ap, ifTp, stance, avgWdps());
//    jab = new spell('physical', 1.15, ap, ifTp, stance, avgWdps());
    rsk = new spell('physical', 14.4, ap, ifTp, stance, avgWdps());
//    expelHarm = new spell('nature', 0.6, ap, ifTp, stance, avgWdps());
//    hurricaneStrike = new spell('physical', 2, ap, ifTp, stance, avgWdps());
    
    function test() {
        var tpdmg = tigerpalm.damage();
        var rskdmg = rsk.damage();
        
        console.log('test ' + tpdmg + ', ' + rskdmg);
    }test();
}