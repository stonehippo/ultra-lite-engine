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

var util = require("./ultralite/util.js");
var dice = require("./ultralite/dice.js");
var reaction = require("./ultralite/reaction.js");
var task = require("./ultralite/task.js");
var attributes = require("./ultralite/attributes.js");
var character = require("./ultralite/character.js");
var npc = require("./ultralite/npc.js");
var combat = require("./ultralite/combat.js");
var turn = require("./ultralite/turn.js");
var session = require("./ultralite/session.js");

var exports = module.exports = {};

exports.util = util;
exports.dice = dice;
exports.reaction = reaction;
exports.task = task;
exports.attributes = attributes;
exports.character = character;
exports.npc = npc;
exports.combat = combat;
exports.turn = turn;
exports.session = session;
