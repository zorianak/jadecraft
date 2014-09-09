function importChar(region, char, realm) {
    // http://us.battle.net/api/wow/character/Windrunner/Caligraphy?fields=stats
    var url = 'http://' + region + '.battle.net' +'/api/wow/character/' + realm + '/' + char;
    var statsUrl = url + '?fields=stats&locale=en_US&apikey=fbgams9zxkqsezwqaavxxk9u8rkvxxkn';
    
    $.ajax({
        url: statsUrl,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        success: function (data) {
            console.log(data);
        }
    });
}