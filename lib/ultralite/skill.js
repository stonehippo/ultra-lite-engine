import util from "./util.js";

const skill = {
  skills: {},
  create (spec) {
    let that = {
      name: null
    }

    if (spec) {
      util.objectMap(that, spec);
    }

    return that;
  },
  list () {
    return this.skills;
  },
  add (skill) {
    this.skills[skill.name] = skill;
  }
};

export default skill;
