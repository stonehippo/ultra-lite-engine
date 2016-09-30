import util from "./util.js";

const skill = {
  create (spec) {
    let that = {
      name: null
    }

    if (spec) {
      util.objectMap(that, spec);
    }

    return that;
  }
};

export default skill;
