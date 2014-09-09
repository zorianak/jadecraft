function importChar(region, char, realm) {
    // http://us.battle.net/api/wow/character/Windrunner/Caligraphy?fields=stats
    var url = 'https://' + region + '.battle.net' +'/api/wow/character/' + realm + '/' + char;
    var statsUrl = url + '?fields=stats&locale=en_US&jsonp=callback&apikey=fbgams9zxkqsezwqaavxxk9u8rkvxxkn';

    var charObj = [];
    
    $.ajax({
        url: statsUrl,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        success: function (data) {
            // so now we want to assign these to charObj
            charObj["name"] = data["name"];
            charObj["realm"] = data["realm"];
            charObj["race"] = data["race"];

            // now the real stats!
            charObj["agi"] = data["stats"]["agi"];
            charObj["str"] = data["stats"]["str"];
            charObj["ap"] = data["stats"]["attackPower"];
            charObj["crit"] = data["stats"]["critRating"];
            charObj["mastery"] = data["stats"]["masteryRating"];
            charObj["haste"] = data["stats"]["hasteRating"];
            // 6.0 stats?
            //charObj["versatility"] = data["stats"]["versatilityRating"];
            charObj["Mdps"] = data["stats"]["mainHandDmgMax"];
            charObj["mdps"] = data["stats"]["mainHandDmgMin"];
            charObj["mhs"] = data["stats"]["mainHandSpeed"]
            charObj["ohdps"] = data["stats"]["offHandDmgMin"];
            charObj["Ohdps"] = data["stats"]["offHandDmgMax"];
            charObj["ohs"] = data["stats"]["offHandSpeed"];


            console.log(charObj["agi"]);
        }
    });

    // Charsheet will have everything nicely packaged into a new object
    // from the API's return.
    return charObj;
}