module.exports = {
  objectMap: function(that, spec) {
    var keys = Object.keys(spec);
    keys.forEach(function (element, index) {
      that[element] = spec[element];
    });
  },
};
