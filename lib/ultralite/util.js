const util = {
  objectMap(that, spec) {
    let keys = Object.keys(spec);
    keys.forEach((element, index) => that[element] = spec[element]);
  },
};

export default util;
