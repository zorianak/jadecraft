$(document).ready(function(){

    function getChar() {
        importChar('US', 'Caligraphy', 'Windrunner', function(data) {
            var theChar = data;
            return theChar;
        });
    }

    function Char(data) {
        if(typeof data != 'undefined') {

        console.log(data);

        this.name = data["name"] || "Anon monk";

      // NOW TO INPUT ALL THE THINGS
        this.realm = data["realm"] || "No realm";
        this.race = data["race"] || "No race";

        // now the real stats!
        this.Agility = data["stats"]["agi"] || 0;
        this.Strength = data["stats"]["str"] || 0;
        this.AP = data["stats"]["attackPower"] || 0;
        this.Crit = data["stats"]["critRating"] || 0;
        this.Mastery = data["stats"]["masteryRating"] || 0;
        this.Haste = data["stats"]["hasteRating"] || 0;
        this.Versatility = data["stats"]["versatilityDamageDoneBonus"] || 0;
        this.VersRating = data["stats"]["versatility"] || 0;
        // 6.0 stats?
        //charObj["versatility"] = data["stats"]["versatilityRating"];
        this.Mdps = data["stats"]["mainHandDmgMax"] || 0;
        this.mdps = data["stats"]["mainHandDmgMin"] || 0;
        this.mhs = data["stats"]["mainHandSpeed"] || 0;
        this.ohdps = data["stats"]["offHandDmgMin"] || 0;
        this.Ohdps = data["stats"]["offHandDmgMax"] || 0;
        this.ohs = data["stats"]["offHandSpeed"] || 0;

        // so this will handle all the gear!
        this.Helm = data["items"]["head"] || 0;
        this.Neck = data["items"]["neck"] || 0;
        this.Shoulder = data["items"]["shoulder"] || 0;
        this.Back = data["items"]["back"] || 0;
        this.Chest = data["items"]["chest"] || 0;
        this.Wrist = data["items"]["wrist"] || 0;
        this.Hands = data["items"]["hands"] || 0;
        this.Waist = data["items"]["waist"] || 0;
        this.Legs = data["items"]["legs"] || 0;
        this.Feet = data["items"]["feet"] || 0;
        this.Finger1 = data["items"]["finger1"] || 0;
        this.Finger2 = data["items"]["finger2"] || 0;
        this.Trinket1 = data["items"]["trinket1"] || 0;
        this.Trinket2 = data["items"]["trinket2"] || 0;
        this.Mainhand = data["items"]["mainHand"] || 0;
        this.Offhand = data["items"]["offHand"] || 0;
    }
    }

    var theChar = new Char();
    console.log(theChar.name);

    // test for TP to be active - yes globalized
    ifTp = $('#ifTp').val();

});
