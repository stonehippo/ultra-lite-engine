// A really simple example of a game session
var path = require('path');
ultralite = require("../lib/ultralite.js");
var characters = ultralite.character.loadCharactersFromLocalFile(path.resolve("./example/characters.json"));

var session = ultralite.session.create();
session.addCharacters(characters);
session.start();

console.log(session);
