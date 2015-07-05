module.exports = {
  create: function(spec) {
    var that = {
      location: "", // i.e. "The Forest", "King's Dungeon", etc.
      actions: []
    };

    if (spec) {
      ultralite.util.objectMap(that, spec);
    }
    return that;
  }
};
