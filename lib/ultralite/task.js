import dice from "./dice.js";
import util from "./util.js";

const task = {
  status: {
    "success": "success",
    "criticalSuccess": "criticalSuccess",
    "failure": "failure",
    "criticalFailure": "criticalFailure"
  },
  create(spec) {
    let that = {
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

    // that.resolve = function() {
    //   that.roll = task.roll();
    //   if (that.roll == 18) {
    //     // always fail on an 18 i.e. "a critical failure"
    //     that.status = task.status.criticalFailure;
    //   } else if (that.roll == 3) {
    //     // alwayes succeed on a 3 i.e. "a critical success"
    //     that.status = task.status.criticalSuccess;
    //   } else if (that.roll <= (that.baseRoll + that.modifier)) {
    //     that.status = task.status.success;
    //   } else {
    //     that.status = task.status.failure;
    //   }
    // };

    return that;
  },
  resolve(t, roll) {
    const resolved = {...t};
    resolved.roll = roll;
      if (resolved.roll == 18) {
        // always fail on an 18 i.e. "a critical failure"
        resolved.status = task.status.criticalFailure;
      } else if (resolved.roll == 3) {
        // alwayes succeed on a 3 i.e. "a critical success"
        resolved.status = task.status.criticalSuccess;
      } else if (resolved.roll <= (resolved.baseRoll + resolved.modifier)) {
        resolved.status = task.status.success;
      } else {
        resolved.status = task.status.failure;
      }
    return resolved;
  },
	roll() {
		return dice.rollWithDiceCountOf(3);
	},
};

export default task;
