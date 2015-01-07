
$(document).ready(function(){

    // test for TP to be active - yes globalized
    ifTp = $('#ifTp').val();

    // get all the character stats from the table.
    // This basically allows us to automagically
    // allow the model to happen; sure,
    // client-side is bad, but we'll forgive it for
    // now.
    var charStats = {};
    var theTable = $('#char-stat-table tr');
    $.each( theTable, function( key, value ) {
        var attribute = $($(theTable)[key]).find('td.attrName').html();
        var attrRating = $($(theTable)[key]).find('td.attrStat').html();
        charStats[attribute] = attrRating;
    });

    // set avgWdps (used a lot!)
    charStats["avgWdps"] = setAvgWdps(charStats["Mainhand DPS"], charStats["Offhand DPS"]);

    // for now we're also going to add some of the
    // weapon information into the tables, so that
    // we can more easily get the wDPS

    var fof = new Jadec.spell('physical', 7.755, charStats, ifTp, 1.1, 25);

    var fofDmg = function() {
        var ticks = 1;
        var damage = fof.damage() * ticks;

        return damage;
    }

    console.log(charStats);
    console.log(fofDmg());
});
