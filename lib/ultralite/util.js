module.exports = {
  objectMap: function(that, spec) {
    var keys = Object.keys(spec);
    keys.forEach(function (element, index) {
      that[element] = spec[element];
    });
  },
  loadCharactersFromLocalFile: function(filePath) {
    var characters = require(filePath);

    // transform the attribute values in the JSON into valid objects
    characters.forEach(function(element, index) {
        var character = element;
        var attributes = Object.keys(character.attributes);
        attributes.forEach(function (attribute) {
          character.attributes[attribute] = eval(character.attributes[attribute]); // YUCK, FIND A BETTER WAY
        });
    });

    return characters;
  }
};
