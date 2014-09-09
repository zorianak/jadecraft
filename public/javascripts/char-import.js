function importChar(region, char, realm) {
    // http://us.battle.net/api/wow/character/Windrunner/Caligraphy?fields=stats
    var url = 'http://' + region + '.battle.net' +'/api/wow/character/' + realm + '/' + char;
    var statsUrl = url + '?fields=stats';
    
    // So we should be sent data with all the char dataz heh
//    $.getJSON(statsUrl , function( data ) {
//        var items = [];
//        console.log(items);
//    });
    
    $.ajax({
        type: "GET",
        url: statsUrl,
        dataType: "jsonp",
        success: function(data){
            var name = data["name"];
            console.log(name);   
        }
    });
}