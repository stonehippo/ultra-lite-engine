var ultralite = {

	dice: {
		rollWithRange: function(min, max) {
			return Math.floor(Math.random() * (max -min)) + min;
		},
		rollWithDiceCountOf: function(dice){
			if(!dice) return new RangeError("Number of dice must be at least 1");
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
	}
};

module.exports = ultralite;