var dice = require("./dice.js");
var util = require("./util.js");
var task = {
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
      util.objectMap(that, spec);
    }

    // always add a -6 modifier for tasks that require skills
    if (that.skill) {
      that.modifier = that.modifier - 6;
    }

    that.resolve = function() {
      that.roll = task.roll();
      // allways fail on an 18
      if (that.roll == 18) {
        that.status = task.status.criticalFailure;
      } else if (that.roll == 3) {
        that.status = task.status.criticalSuccess;
      } else if (that.roll <= (that.baseRoll + that.modifier)) {
        that.status = task.status.success;
      } else {
        that.status = task.status.failure;
      }
    };

    return that;
  },
	roll: function() {
		return dice.rollWithDiceCountOf(3);
	},
};

module.exports = task;
