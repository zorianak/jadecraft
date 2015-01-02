// This is an object to create a character object
// We pass in the data from the original importChar
// function, represented as just "data", and return
// the charObj

//function Char(){
//    // basic character object has a region, name, and realm passed into it
//    // No characters exist without these things
//
//    this.name = data["name"] || "Anon monk";
//
////    return data;
//}

module.exports = {
  Char: function(data) {

    var stats = data["stats"] || {},
        items = data["items"] || {};
    this.name = data["name"] || "Anon monk";

    // NOW TO INPUT ALL THE THINGS
    this.realm = data["realm"] || "No realm";
    this.race = data["race"] || "No race";

    // now the real stats!
    this.Agility = stats["agi"] || 0;
    this.Strength = stats["str"] || 0;
    this.AP = stats["attackPower"] || 0;
    this.Crit = stats["critRating"] || 0;
    this.Mastery = stats["masteryRating"] || 0;
    this.Haste = stats["hasteRating"] || 0;
    this.Versatility = stats["versatilityDamageDoneBonus"] || 0;
    this.VersRating = stats["versatility"] || 0;
//    // 6.0 stats?
    //charObj["versatility"] = data["stats"]["versatilityRating"];
    this.Mdps = stats["mainHandDmgMax"] || 0;
    this.mdps = stats["mainHandDmgMin"] || 0;
    this.mhs = stats["mainHandSpeed"] || 0;
    this.ohdps = stats["offHandDmgMin"] || 0;
    this.Ohdps = stats["offHandDmgMax"] || 0;
    this.ohs = stats["offHandSpeed"] || 0;

//    // so this will handle all the gear!
    this.Helm = items["head"] || 'No Item';
    this.Neck = items["neck"] || 'No Item';
    this.Shoulder = items["shoulder"] || 'No Item';
    this.Back = items["back"] || 'No Item';
    this.Chest = items["chest"] || 'No Item';
    this.Wrist = items["wrist"] || 'No Item';
    this.Hands = items["hands"] || 'No Item';
    this.Waist = items["waist"] || 'No Item';
    this.Legs = items["legs"] || 'No Item';
    this.Feet = items["feet"] || 'No Item';
    this.Finger1 = items["finger1"] || 'No Item';
    this.Finger2 = items["finger2"] || 'No Item';
    this.Trinket1 = items["trinket1"] || 'No Item';
    this.Trinket2 = items["trinket2"] || 'No Item';
    this.Mainhand = items["mainHand"] || 'No Item';
    this.Offhand = items["offHand"] || 'No Item';
  }
};
