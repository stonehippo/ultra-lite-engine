import util from "./util.js";

const turn = {
  create(spec) {
    let that = {
      location: "", // i.e. "The Forest", "King's Dungeon", etc.
      actions: []
    };

    if (spec) {
      util.objectMap(that, spec);
    }
    return that;
  }
};

export default turn;
