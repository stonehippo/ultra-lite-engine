// A really simple example of a game session

ultralite = require("../lib/ultralite.js");

var sirGodric = ultralite.character.create({
  attributes: {
    ST: ultralite.attributes.ST.strong,
    IQ: ultralite.attributes.IQ.normal,
    DX: ultralite.attributes.DX.agile,
    HT: ultralite.attributes.HT.hardy
  },
  skills: {
    knight: {
      level: 2,
      description: "The medival skills of fighting and chivalry"
    }
  }
});

var lordDrakon = ultralite.character.create({
  attributes: {
    ST: ultralite.attributes.ST.weak,
    IQ: ultralite.attributes.IQ.genius,
    DX: ultralite.attributes.DX.normal,
    HT: ultralite.attributes.HT.normal
  },
  skills: {
    sorcery: {
      level: 3,
      description: "The mystical power of innate magic"
    }
  }
});

console.log(sirGodric, lordDrakon);

var session = ultralite.session.create();
