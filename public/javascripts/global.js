$(document).ready(function(){

    function getChar() {
        importChar('US', 'Caligraphy', 'Windrunner', function(data) {
            var theChar = data;
            return theChar;
        });
    }

    function Char() {
        this.name = "Anon monk";
    }

    var theChar = new Char();
    console.log(theChar.name);

    // test for TP to be active - yes globalized
    ifTp = $('#ifTp').val();

});
