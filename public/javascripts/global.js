
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

    // for now we're also going to add some of the
    // weapon information into the tables, so that
    // we can more easily get the wDPS

    console.log(charStats);
});
