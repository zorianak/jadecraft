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
  Char: function() {
      this.name = "Anon monk";
  },

  escape: function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};
