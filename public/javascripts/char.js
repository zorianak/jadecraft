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
