"use strict";

// ES6 polyfills
if (!Number.isInteger) {
  Number.isInteger = function isInteger(nVal) {
    return typeof nVal === 'number'
    && isFinite(nVal)
    && nVal > -9007199254740992
    && nVal < 9007199254740992
    && Math.floor(nVal) === nVal;
  };
}

var dice = require("./ultralite/dice.js");
var reaction = require("./ultralite/reaction.js");
var task = require("./ultralite/task.js");
var levels = require("./ultralite/levels.js");
var character = require("./ultralite/character.js");
var npc = require("./ultralite/npc.js");
var combat = require("./ultralite/combat.js");

var exports = module.exports = {};

exports.dice = dice;
exports.reaction = reaction;
exports.task = task;
exports.levels = levels;
exports.character = character;
exports.npc = npc;
exports.combat = combat;
