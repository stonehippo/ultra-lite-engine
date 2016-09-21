"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var advantage = {};

exports.default = advantage;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var attributeLevels = {
	ST: {
		weak: {
			baseRoll: 8,
			hitPoints: 8,
			basicDamage: "1d6/2"
		},
		normal: {
			baseRoll: 10,
			hitPoints: 10,
			basicDamage: "1d6"
		},
		strong: {
			baseRoll: 14,
			hitPoints: 14,
			basicDamage: "2d6"
		},
		veryStrong: {
			baseRoll: 18,
			hitPoints: 18,
			basicDamage: "3d6"
		}
	},
	DX: {
		clumsy: {
			baseRoll: 8
		},
		normal: {
			baseRoll: 10
		},
		agile: {
			baseRoll: 12
		},
		veryAgile: {
			baseRoll: 14
		},
		extreme: {
			baseRoll: 16
		}
	},
	IQ: {
		dull: {
			baseRoll: 8
		},
		normal: {
			baseRoll: 10
		},
		smart: {
			baseRoll: 12
		},
		verySmart: {
			baseRoll: 14
		},
		genius: {
			baseRoll: 16
		}
	},
	HT: {
		sickly: {
			baseRoll: 8
		},
		normal: {
			baseRoll: 10
		},
		hardy: {
			baseRoll: 14
		},
		veryHardy: {
			baseRoll: 18
		}
	}
};

exports.default = attributeLevels;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _util = require("./util.js");

var _util2 = _interopRequireDefault(_util);

var _attributeLevels = require("./attributeLevels.js");

var _attributeLevels2 = _interopRequireDefault(_attributeLevels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var character = {
	create: function create(spec) {
		var _attributes = {
			ST: { name: "normal", level: _attributeLevels2.default.ST.normal },
			HT: { name: "normal", level: _attributeLevels2.default.HT.normal },
			IQ: { name: "normal", level: _attributeLevels2.default.IQ.normal },
			DX: { name: "normal", level: _attributeLevels2.default.DX.normal }
		};
		var that = {
			name: "",
			notes: "",
			attribute: function attribute(_attribute) {
				return _attributes[_attribute].name;
			},
			attributeLevel: function attributeLevel(attribute) {
				return _attributes[attribute].level;
			},
			setAttribute: function setAttribute(attribute, value) {
				if (Object.getOwnPropertyNames(_attributeLevels2.default).filter(function (el) {
					if (el == attribute) return true;
				}).length != 0 && _attributeLevels2.default[attribute].hasOwnProperty(value)) {
					_attributes[attribute].name = value;
					_attributes[attribute].level = _attributeLevels2.default[attribute][value];
				}
			},
			setAttributeLevel: function setAttributeLevel(attribute, level) {
				if (Object.getOwnPropertyNames(_attributeLevels2.default).filter(function (el) {
					if (el == attribute) return true;
				}).length != 0 && (typeof level === "undefined" ? "undefined" : _typeof(level)) === "object") {
					for (var attributeLevel in _attributeLevels2.default[attribute]) {
						if (level === _attributeLevels2.default[attribute][attributeLevel]) {
							_attributes[attribute].level = level;
							_attributes[attribute].name = attributeLevel;
						}
					}
				}
			},

			levels: 3,
			skills: {},
			advantages: {}
		};

		// use the spec object to customize the character
		if (spec) {
			// map included attributes to object values, and include defaults for any
			// attributes that aren't in the spec object
			if (spec.attributes) {
				Object.keys(_attributeLevels2.default).forEach(function (attribute) {
					switch (_typeof(spec.attributes[attribute])) {
						case 'string':
							that.setAttribute(attribute, spec.attributes[attribute]);
							break;
						case 'object':
							that.setAttributeLevel(attribute, spec.attributes[attribute]);
							break;
						default:
							that.setAttributeLevel(attribute, _attributeLevels2.default[attribute].normal);
					}
				});
			}
			_util2.default.objectMap(that, spec);
		}

		return that;
	},

	loadCharactersFromLocalFile: function loadCharactersFromLocalFile(filePath) {
		var characters = require(filePath);
		return characters.map(function (element) {
			return character.create(element);
		});
	}
};

exports.default = character;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var combat = {
	attack: function attack(attacker, target, modifiers) {
		// determine if the attacker hits the target
		// determine if the target evades (dodge, parry, etc) the attack
		// determine damage to the target
	}
};

exports.default = combat;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dice = {
  rollWithRange: function rollWithRange(min, max) {
    if (typeof min === 'undefined') throw Error("/min value not specified");
    if (typeof max === 'undefined') throw Error("/max value not specified");
    if (!Number.isInteger(min)) throw Error("min value must be an integer");
    if (!Number.isInteger(max)) throw Error("max value must be an integer");
    if (min < 1) throw Error("min value must be <= 1");
    if (max < min) throw Error("max must be greater than min");

    return Math.floor(Math.random() * (max - min)) + min;
  },
  rollWithDiceCountOf: function rollWithDiceCountOf(dice) {
    if (!dice) throw new RangeError("Number of dice must be at least 1");
    return this.rollWithRange(dice, dice * 6);
  }
};

exports.default = dice;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _character = require("./character.js");

var _character2 = _interopRequireDefault(_character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var npc = {
	create: function create(spec) {
		if (!spec) {
			spec = {};
		}

		var that = _character2.default.create(spec),
		    reaction = "undecided";

		if (!spec.reaction) {
			reaction = "undecided";
		}

		that.reaction = function () {
			return reaction;
		};

		that.hostile = function () {
			return reaction === "hostile";
		};

		that.makeHostile = function () {
			reaction = "hostile";
		};

		that.undecided = function () {
			return reaction === "undecided";
		};

		that.makeUndecided = function () {
			reaction = "undecided";
		};

		that.friendly = function () {
			return reaction === "friendly";
		};

		that.makeFriendly = function () {
			reaction = "friendly";
		};

		return that;
	}
};

exports.default = npc;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dice = require("./dice.js");

var _dice2 = _interopRequireDefault(_dice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reaction = {
  roll: function roll() {
    return _dice2.default.rollWithDiceCountOf(3);
  },
  rollForReaction: function rollForReaction(npc, modifiers, roll) {
    npc.makeUndecided();
    if (roll < 7) {
      npc.makeHostile();
    }
    if (roll > 14) {
      npc.makeFriendly();
    }
    return npc.reaction();
  }
};

exports.default = reaction;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _turn = require("./turn.js");

var _turn2 = _interopRequireDefault(_turn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var session = {
  state: {
    created: "created",
    inProgress: "inProgress",
    ended: "ended"
  },
  create: function create(spec) {
    var that = {
      state: session.state.created,
      turns: [],
      characters: [],
      addCharacters: function addCharacters(characters) {
        that.characters = characters;
      },
      nextTurn: function nextTurn(turnSpec) {
        if (that.state == session.state.inProgress) {
          var thisTurn = _turn2.default.create(turnSpec);
          that.turns.unshift(_turn2.default);
          return thisTurn;
        }

        return null;
      },
      currentTurn: function currentTurn() {
        if (that.state == session.state.inProgress) {
          return that.turns[0];
        }

        return null;
      },
      start: function start() {
        that.state = session.state.inProgress;
        that.nextTurn();
      },
      end: function end() {
        that.state = session.state.ended;
      }
    };

    return that;
  }
};

exports.default = session;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var skill = {};

exports.default = skill;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dice = require("./dice.js");

var _dice2 = _interopRequireDefault(_dice);

var _util = require("./util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = {
  status: {
    "success": "success",
    "criticalSuccess": "criticalSuccess",
    "failure": "failure",
    "criticalFailure": "criticalFailure"
  },
  create: function create(spec) {
    var that = {
      status: null,
      roll: null,
      baseRoll: 10,
      skill: null,
      modifier: 0
    };

    if (spec) {
      _util2.default.objectMap(that, spec);
    }

    // always add a -6 modifier for tasks that require skills
    if (that.skill) {
      that.modifier = that.modifier - 6;
    }

    that.resolve = function () {
      that.roll = task.roll();
      if (that.roll == 18) {
        // always fail on an 18 i.e. "a critical failure"
        that.status = task.status.criticalFailure;
      } else if (that.roll == 3) {
        // alwayes succeed on a 3 i.e. "a critical success"
        that.status = task.status.criticalSuccess;
      } else if (that.roll <= that.baseRoll + that.modifier) {
        that.status = task.status.success;
      } else {
        that.status = task.status.failure;
      }
    };

    return that;
  },
  roll: function roll() {
    return _dice2.default.rollWithDiceCountOf(3);
  }
};

exports.default = task;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require("./util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var turn = {
  create: function create(spec) {
    var that = {
      location: "", // i.e. "The Forest", "King's Dungeon", etc.
      actions: []
    };

    if (spec) {
      _util2.default.objectMap(that, spec);
    }
    return that;
  }
};

exports.default = turn;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {
  objectMap: function objectMap(that, spec) {
    var keys = Object.keys(spec);
    keys.forEach(function (element, index) {
      return that[element] = spec[element];
    });
  }
};

exports.default = util;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require("./ultralite/util.js");

var _util2 = _interopRequireDefault(_util);

var _attributeLevels = require("./ultralite/attributeLevels.js");

var _attributeLevels2 = _interopRequireDefault(_attributeLevels);

var _dice = require("./ultralite/dice.js");

var _dice2 = _interopRequireDefault(_dice);

var _reaction = require("./ultralite/reaction.js");

var _reaction2 = _interopRequireDefault(_reaction);

var _task = require("./ultralite/task.js");

var _task2 = _interopRequireDefault(_task);

var _character = require("./ultralite/character.js");

var _character2 = _interopRequireDefault(_character);

var _npc = require("./ultralite/npc.js");

var _npc2 = _interopRequireDefault(_npc);

var _combat = require("./ultralite/combat.js");

var _combat2 = _interopRequireDefault(_combat);

var _turn = require("./ultralite/turn.js");

var _turn2 = _interopRequireDefault(_turn);

var _session = require("./ultralite/session.js");

var _session2 = _interopRequireDefault(_session);

var _advantage = require("./ultralite/advantage.js");

var _advantage2 = _interopRequireDefault(_advantage);

var _skill = require("./ultralite/skill.js");

var _skill2 = _interopRequireDefault(_skill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-polyfill");

// export let util = myutil;
// export let attributeLevels = myattributeLevels;
// export let dice = mydice;
// export let reaction = myreaction;
// export let task = mytask;
// export let character = mycharacter;
// export let npc = mynpc;
// export let combat = mycombat;
// export let turn = myturn;
// export let session = mysession;
// export let advantage = myadvantage;
// export let skill = myskill;

var ultralite = {
  util: _util2.default,
  attributeLevels: _attributeLevels2.default,
  dice: _dice2.default,
  reaction: _reaction2.default,
  task: _task2.default,
  character: _character2.default,
  npc: _npc2.default,
  combat: _combat2.default,
  turn: _turn2.default,
  session: _session2.default,
  advantage: _advantage2.default,
  skill: _skill2.default
};

exports.default = ultralite;
