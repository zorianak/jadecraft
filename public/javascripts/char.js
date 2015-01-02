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

    var stats = data["stats"] || {};
    this.name = data["name"] || "Anon monk";

    // NOW TO INPUT ALL THE THINGS
    this.realm = data["realm"] || "No realm";
    this.race = data["race"] || "No race";

    // now the real stats!
    this.Agility = stats["agi"] || "0";
    this.Strength = stats["str"] || 0;
    this.AP = stats["attackPower"] || 0;
    this.Crit = stats["critRating"] || 0;
    this.Mastery = stats["masteryRating"] || 0;
    this.Haste = stats["hasteRating"] || 0;
    this.Versatility = stats["versatilityDamageDoneBonus"] || 0;
    this.VersRating = stats["versatility"] || 0;
//    // 6.0 stats?
//    //charObj["versatility"] = data["stats"]["versatilityRating"];
//    this.Mdps = data["stats"]["mainHandDmgMax"] || 0;
//    this.mdps = data["stats"]["mainHandDmgMin"] || 0;
//    this.mhs = data["stats"]["mainHandSpeed"] || 0;
//    this.ohdps = data["stats"]["offHandDmgMin"] || 0;
//    this.Ohdps = data["stats"]["offHandDmgMax"] || 0;
//    this.ohs = data["stats"]["offHandSpeed"] || 0;
//
//    // so this will handle all the gear!
//    this.Helm = data["items"]["head"] || 0;
//    this.Neck = data["items"]["neck"] || 0;
//    this.Shoulder = data["items"]["shoulder"] || 0;
//    this.Back = data["items"]["back"] || 0;
//    this.Chest = data["items"]["chest"] || 0;
//    this.Wrist = data["items"]["wrist"] || 0;
//    this.Hands = data["items"]["hands"] || 0;
//    this.Waist = data["items"]["waist"] || 0;
//    this.Legs = data["items"]["legs"] || 0;
//    this.Feet = data["items"]["feet"] || 0;
//    this.Finger1 = data["items"]["finger1"] || 0;
//    this.Finger2 = data["items"]["finger2"] || 0;
//    this.Trinket1 = data["items"]["trinket1"] || 0;
//    this.Trinket2 = data["items"]["trinket2"] || 0;
//    this.Mainhand = data["items"]["mainHand"] || 0;
//    this.Offhand = data["items"]["offHand"] || 0;
  }
};
