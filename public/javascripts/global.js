$(document).ready(function(){

    function getChar() {
        importChar('US', 'Caligraphy', 'Windrunner', function(data) {
            var theChar = data;
            return theChar;
        });
    }

    // test for TP to be active - yes globalized
    ifTp = $('#ifTp').val();

});
