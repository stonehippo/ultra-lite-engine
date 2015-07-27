var util = require("./util.js");
var turn = {
  create: function(spec) {
    var that = {
      location: "", // i.e. "The Forest", "King's Dungeon", etc.
      actions: []
    };

    if (spec) {
      util.objectMap(that, spec);
    }
    return that;
  }
};

module.exports = turn;
