var path = require('path');

describe('utilities', function () {
  var util = ultralite.util;
  it("should have a method for mapping properties from one object to another", function() {
    util.should.respondTo("objectMap");
  });

  it("should be able to load characters from JSON locally", function() {
    util.should.respondTo("loadCharactersFromLocalFile");
    var characters = util.loadCharactersFromLocalFile(path.resolve("./example/characters.json"));
    characters.length.should.equal(2);
    var sirGodric = characters[0];
    // this property is not in the file
    // should be injected by the character creator
    sirGodric.should.have.property("notes");
    sirGodric.levels.should.equal(4);
    sirGodric.attributes.ST.should.equal(ultralite.character.attributeLevels.ST.strong);
  });
});
