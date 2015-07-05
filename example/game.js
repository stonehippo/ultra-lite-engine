// A really simple example of a game session
var path = require('path');
ultralite = require("../lib/ultralite.js");
var characters = ultralite.util.loadCharactersFromLocalFile(path.resolve("./example/characters.json"));

var sirGodric = ultralite.character.create(characters[0]);

var lordDrakon = ultralite.character.create(characters[1]);

console.log(sirGodric, lordDrakon);

var session = ultralite.session.create();
