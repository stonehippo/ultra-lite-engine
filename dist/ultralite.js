"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var advantage = {};
var _default = exports["default"] = advantage;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
var _default = exports["default"] = attributeLevels;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _util = _interopRequireDefault(require("./util.js"));
var _attributeLevels = _interopRequireDefault(require("./attributeLevels.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var character = {
  create: function create(spec) {
    var _attributes = {
      ST: {
        name: "normal",
        level: _attributeLevels["default"].ST.normal
      },
      HT: {
        name: "normal",
        level: _attributeLevels["default"].HT.normal
      },
      IQ: {
        name: "normal",
        level: _attributeLevels["default"].IQ.normal
      },
      DX: {
        name: "normal",
        level: _attributeLevels["default"].DX.normal
      }
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
        if (Object.getOwnPropertyNames(_attributeLevels["default"]).filter(function (el) {
          if (el == attribute) return true;
        }).length != 0 && _attributeLevels["default"][attribute].hasOwnProperty(value)) {
          _attributes[attribute].name = value;
          _attributes[attribute].level = _attributeLevels["default"][attribute][value];
        }
      },
      setAttributeLevel: function setAttributeLevel(attribute, level) {
        if (Object.getOwnPropertyNames(_attributeLevels["default"]).filter(function (el) {
          if (el == attribute) return true;
        }).length != 0 && _typeof(level) === "object") {
          for (var attributeLevel in _attributeLevels["default"][attribute]) {
            if (level === _attributeLevels["default"][attribute][attributeLevel]) {
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
        Object.keys(_attributeLevels["default"]).forEach(function (attribute) {
          switch (_typeof(spec.attributes[attribute])) {
            case 'string':
              that.setAttribute(attribute, spec.attributes[attribute]);
              break;
            case 'object':
              that.setAttributeLevel(attribute, spec.attributes[attribute]);
              break;
            default:
              that.setAttributeLevel(attribute, _attributeLevels["default"][attribute].normal);
          }
        });
      }
      _util["default"].objectMap(that, spec);
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
var _default = exports["default"] = character;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var combat = {
  attack: function attack(attacker, target, modifiers) {
    // determine if the attacker hits the target
    // determine if the target evades (dodge, parry, etc) the attack
    // determine damage to the target
  }
};
var _default = exports["default"] = combat;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
var _default = exports["default"] = dice;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _character = _interopRequireDefault(require("./character.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var npc = {
  create: function create(spec) {
    if (!spec) {
      spec = {};
    }
    var that = _character["default"].create(spec),
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
var _default = exports["default"] = npc;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dice = _interopRequireDefault(require("./dice.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var reaction = {
  roll: function roll() {
    return _dice["default"].rollWithDiceCountOf(3);
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
var _default = exports["default"] = reaction;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _turn = _interopRequireDefault(require("./turn.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
          var thisTurn = _turn["default"].create(turnSpec);
          that.turns.unshift(_turn["default"]);
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
var _default = exports["default"] = session;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _util = _interopRequireDefault(require("./util.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var skill = {
  create: function create(spec) {
    var that = {
      name: null
    };
    if (spec) {
      _util["default"].objectMap(that, spec);
    }
    return that;
  }
};
var _default = exports["default"] = skill;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dice = _interopRequireDefault(require("./dice.js"));
var _util = _interopRequireDefault(require("./util.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
      _util["default"].objectMap(that, spec);
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
    return _dice["default"].rollWithDiceCountOf(3);
  }
};
var _default = exports["default"] = task;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _util = _interopRequireDefault(require("./util.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var turn = {
  create: function create(spec) {
    var that = {
      location: "",
      // i.e. "The Forest", "King's Dungeon", etc.
      actions: []
    };
    if (spec) {
      _util["default"].objectMap(that, spec);
    }
    return that;
  }
};
var _default = exports["default"] = turn;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var util = {
  objectMap: function objectMap(that, spec) {
    var keys = Object.keys(spec);
    keys.forEach(function (element, index) {
      return that[element] = spec[element];
    });
  }
};
var _default = exports["default"] = util;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/stable");
var _util = _interopRequireDefault(require("./ultralite/util.js"));
var _attributeLevels = _interopRequireDefault(require("./ultralite/attributeLevels.js"));
var _dice = _interopRequireDefault(require("./ultralite/dice.js"));
var _reaction = _interopRequireDefault(require("./ultralite/reaction.js"));
var _task = _interopRequireDefault(require("./ultralite/task.js"));
var _character = _interopRequireDefault(require("./ultralite/character.js"));
var _npc = _interopRequireDefault(require("./ultralite/npc.js"));
var _combat = _interopRequireDefault(require("./ultralite/combat.js"));
var _turn = _interopRequireDefault(require("./ultralite/turn.js"));
var _session = _interopRequireDefault(require("./ultralite/session.js"));
var _advantage = _interopRequireDefault(require("./ultralite/advantage.js"));
var _skill = _interopRequireDefault(require("./ultralite/skill.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
  util: _util["default"],
  attributeLevels: _attributeLevels["default"],
  dice: _dice["default"],
  reaction: _reaction["default"],
  task: _task["default"],
  character: _character["default"],
  npc: _npc["default"],
  combat: _combat["default"],
  turn: _turn["default"],
  session: _session["default"],
  advantage: _advantage["default"],
  skill: _skill["default"]
};
var _default = exports["default"] = ultralite;
