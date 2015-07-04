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

var ultralite = {
	dice: {
		rollWithRange: function(min, max) {
			if (typeof min === 'undefined') throw Error("/min value not specified");
			if (typeof max === 'undefined') throw Error("/max value not specified");
			if (!Number.isInteger(min)) throw Error("min value must be an integer");
			if (!Number.isInteger(max)) throw Error("max value must be an integer");
			if (min < 1) throw Error("min value must be <= 1");
			if (max < min) throw Error("max must be greater than min");

			return Math.floor(Math.random() * (max -min)) + min;
		},
		rollWithDiceCountOf: function(dice){
			if(!dice) throw new RangeError("Number of dice must be at least 1");
			return this.rollWithRange(dice, dice * 6);
		}
	},
	reaction: {
		roll: function() {
			return ultralite.dice.rollWithDiceCountOf(3);
		},
		rollForReaction: function(npc, modifiers, roll) {
			npc.makeUndecided();
			if (roll < 7) {
				npc.makeHostile();
			}
			if (roll > 14) {
				npc.makeFriendly();
			}
			return npc.reaction();
		}
	},
	task: {
    status: {
      "success": "success",
      "criticalSuccess": "criticalSuccess",
      "failure": "failure",
      "criticalFailure": "criticalFailure"
    },
    create: function(spec) {
      var that = {
        status: null,
        roll: null,
        difficulty: null,
        skill: null,
        modifier: 0
      };

      if (spec) {
        that.difficulty = spec.difficulty;
        that.skill = spec.skill;
      }

      that.resolve = function() {
        that.roll = ultralite.task.roll();
        // allways fail on an 18
        if (that.roll == 18) {
          that.status = ultralite.task.status.criticalFailure;
        } else if (that.roll == 3) {
          that.status = ultralite.task.status.criticalSuccess;
        } else if (that.roll <= that.difficulty) {
          that.status = ultralite.task.status.success;
        } else {
          that.status = ultralite.task.status.failure;
        }
      };

      return that;
    },
		roll: function() {
			return ultralite.dice.rollWithDiceCountOf(3);
		},
	},
	levels: {
		ST: {
			weak: {
				hitPoints: 8,
				basicDamage: "1d6/2"
			},
			normal: {
				hitPoints: 10,
				basicDamage: "1d6"
			},
			strong: {
				hitPoints: 14,
				basicDamage: "2d6"
			},
			veryStrong: {
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
		HT:  {
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
	},
	character: {
		create: function(spec) {
			var that = {
				name: "",
				notes: "",
				attributes: {
					ST:ultralite.levels.ST.normal,
					HT:ultralite.levels.HT.normal,
					IQ:ultralite.levels.IQ.normal,
					DX:ultralite.levels.DX.normal
				},
				skills: {},
				advantages: {}
			};

			// use the spec object to customize the character
			if (spec) {
				if (spec.name) {
					that.name = spec.name;
				}
			}
			return that;
		}
	},
	npc: {
		create: function(spec) {
			if (!spec) {
				spec = {};
			}

			var that = ultralite.character.create(spec),
				reaction = "undecided";

			if (!spec.reaction) {
				reaction = "undecided";
			}

			that.reaction = function() {
				return reaction;
			};

			that.hostile = function() {
				return reaction === "hostile";
			};

			that.makeHostile = function() {
				reaction = "hostile";
			};

			that.undecided = function() {
				return reaction === "undecided";
			};

			that.makeUndecided = function() {
				reaction = "undecided";
			};

			that.friendly = function() {
				return reaction === "friendly";
			};

			that.makeFriendly = function() {
				reaction = "friendly";
			};

			return that;
		}
	},
	combat: {
		attack: function(attacker, target, modifiers) {
			// determine if the attacker hits the target
			// determine if the target evades (dodge, parry, etc) the attack
			// determine damage to the target
		}
	}
};

module.exports = ultralite;
