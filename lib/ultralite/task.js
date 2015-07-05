var exports = module.exports = {
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
      baseRoll: 10,
      skill: null,
      modifier: 0
    };

    if (spec) {
      var keys = Object.keys(spec);
      keys.forEach(function (element, index) {
        that[element] = spec[element];
      });
    }

    // always add a -6 modifier for tasks that require skills
    if (that.skill) {
      that.modifier = that.modifier - 6;
    }

    that.resolve = function() {
      that.roll = ultralite.task.roll();
      // allways fail on an 18
      if (that.roll == 18) {
        that.status = ultralite.task.status.criticalFailure;
      } else if (that.roll == 3) {
        that.status = ultralite.task.status.criticalSuccess;
      } else if (that.roll <= (that.baseRoll + that.modifier)) {
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
};
