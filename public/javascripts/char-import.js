function importChar(region, char, realm) {
    // http://us.battle.net/api/wow/character/Windrunner/Caligraphy?fields=stats
    var url = 'https://' + region + '.battle.net' +'/api/wow/character/' + realm + '/' + char;
    var statsUrl = url + '?fields=stats,items&locale=en_US&jsonp=callback&apikey=fbgams9zxkqsezwqaavxxk9u8rkvxxkn';

    //!! alert alert! Using global namespace!!!
    charObj = {};

    console.log(statsUrl);
    
    $.ajax({
        url: statsUrl,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        success: function (data) {
            console.log('Done fetching!');
        }
    }).done(function(data) {
        // so now we want to assign these to charObj
        charObj["name"] = data["name"];
        charObj["realm"] = data["realm"];
        charObj["race"] = data["race"];

        // now the real stats!
        charObj["Agility"] = data["stats"]["agi"];
        charObj["Strength"] = data["stats"]["str"];
        charObj["Attack Power"] = data["stats"]["attackPower"];
        charObj["Crit"] = data["stats"]["critRating"];
        charObj["Mastery"] = data["stats"]["masteryRating"];
        charObj["Haste"] = data["stats"]["hasteRating"];
        // 6.0 stats?
        //charObj["versatility"] = data["stats"]["versatilityRating"];
        charObj["Mdps"] = data["stats"]["mainHandDmgMax"];
        charObj["mdps"] = data["stats"]["mainHandDmgMin"];
        charObj["mhs"] = data["stats"]["mainHandSpeed"];
        charObj["ohdps"] = data["stats"]["offHandDmgMin"];
        charObj["Ohdps"] = data["stats"]["offHandDmgMax"];
        charObj["ohs"] = data["stats"]["offHandSpeed"];
        
        // so this will handle all the gear!
        charObj["Helm"] = data["items"]["head"];
        charObj["Neck"] = data["items"]["neck"];
        charObj["Shoulder"] = data["items"]["shoulder"];
        charObj["Back"] = data["items"]["back"];
        charObj["Chest"] = data["items"]["chest"];
        charObj["Wrist"] = data["items"]["wrist"];
        charObj["Hands"] = data["items"]["hands"];
        charObj["Waist"] = data["items"]["waist"];
        charObj["Legs"] = data["items"]["legs"];
        charObj["Feet"] = data["items"]["feet"];
        charObj["Finger1"] = data["items"]["finger1"];
        charObj["Finger2"] = data["items"]["finger2"];
        charObj["Trinket1"] = data["items"]["trinket1"];
        charObj["Trinket2"] = data["items"]["trinket2"];
        charObj["Mainhand"] = data["items"]["mainHand"];
        charObj["Offhand"] = data["items"]["offHand"];
        
        console.log(charObj["Mainhand"]);


        // Charsheet will have everything nicely packaged into a new object
        // from the API's return.
        populateCharacter(charObj);
        initSpells(charObj);
    });
}

function populateCharacter(charObj) {
    console.log('Hello! My name is ' + charObj["name"] + ' and I have ' + charObj["Agility"] + ' agility!');

    var basicsTab = $('#char-basics-table');
    var statsTab = $('#char-sum-table');
    var statsRowTemplate = '';

    // populate basics
    $('#charName').text(charObj["name"]);

    //populate stats
    // so I'm going to loop through all, and if the key matches name, I'm gonna skip it
    $.each( charObj, function(key, value){
        if( key != "name" && key != "realm" && key != "race") {
            statsRowTemplate += '<tr><td>' + key + '</td><td>' + value + '</td></tr>';
        }
    });

    // insert into stats table
    statsTab.html(statsRowTemplate);
}