
$(document).ready(function(){

    // test for TP to be active - yes globalized
//    ifTp = $('#ifTp').val();

	ifTp = true;
    // for now we're also going to add some of the
    // weapon information into the tables, so that
    // we can more easily get the wDPS

    var fof = new Jadec.spell('physical', 7.755, charStats, ifTp, 1.1, 25);

    var fofDmg = function() {
        var ticks = 5;
        var damage = fof.damage() * ticks;

        return damage;
    }

    console.log((charStats["Haste"]/1000) + 10.00);
    console.log(charStats);
});
