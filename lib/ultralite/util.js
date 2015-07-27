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
    return characters.map(function(element) {
        return ultralite.character.create(element);
    });
  }
};
