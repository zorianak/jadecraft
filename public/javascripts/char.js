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
      this.name = data["name"] || "Anon monk";
  }
};
