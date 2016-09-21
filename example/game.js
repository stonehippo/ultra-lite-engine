// A really simple example of a game session
const path = require('path');
import ultralite from "../lib/ultralite.js";

const characters = ultralite.character.loadCharactersFromLocalFile(path.resolve("./example/characters.json"));

const session = ultralite.session.create();
session.addCharacters(characters);
session.start();

console.log(session);
