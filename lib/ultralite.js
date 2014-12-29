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
		}
	},
	task: {
		roll: function() {
			return ultralite.dice.rollWithDiceCountOf(3);
		}
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
			normal: {
				baseRoll: 10
			}
		},
		IQ: {
			normal: {
				baseRoll: 10
			}
		},
		HT:  {
			normal: {
				baseRoll: 10
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
		createNPC: function(spec) {
			var that = character.create(spec);
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