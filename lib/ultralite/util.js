const util = {
  objectMap(that, spec) {
    const keys = Object.keys(spec);
    keys.forEach((element, _index) => that[element] = spec[element]);
  },
};

export default util;
