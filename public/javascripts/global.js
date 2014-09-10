$(document).ready(function(){

    importChar('us', 'Caligraphy', 'Windrunner');

});

/****************************************************

calculate and define the average weapon dps

****************************************************/

avgWdps = function(){
    if(charObj.ohdps === 0) {
        var damage = 300.4;
    } else {
        var damage = 350.1;
    }
    
    return damage;
}