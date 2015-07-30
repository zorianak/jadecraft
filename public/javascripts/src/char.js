// get all the character stats from the table.
// This basically allows us to automagically
// allow the model to happen; sure,
// client-side is bad, but we'll forgive it for
// now.
Jadec.charStats = {};
var theTable = $('#char-stat-table tr');
$.each( theTable, function( key, value ) {
    var attribute = $($(theTable)[key]).find('td.attrName').html();
    var attrRating = $($(theTable)[key]).find('td.attrStat').html();
    Jadec.charStats[attribute] = attrRating;
});

// set avgWdps (used a lot!)
Jadec.charStats["avgWdps"] = setAvgWdps(Jadec.charStats["Mainhand DPS"], Jadec.charStats["Offhand DPS"]);
