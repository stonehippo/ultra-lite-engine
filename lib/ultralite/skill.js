import util from "./util.js";

const skill = {
  skills: {},
  create (spec) {
    let that = {
      name: "Default",
      description: ""
    }

    if (spec) {
      util.objectMap(that, spec);
    }

    return that;
  },
  createWithString (skill = "Default", description = "") {
    let that = {
      name: null,
      description: null
    }
    
    if (skill) {
      util.objectMap(that, {name: skill, description: description});
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
