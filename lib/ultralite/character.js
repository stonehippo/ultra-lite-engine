var exports = module.exports = {
	create: function(spec) {
		var that = {
			name: "",
			notes: "",
			attributes: {
				ST:ultralite.levels.ST.normal,
				HT:ultralite.levels.HT.normal,
				IQ:ultralite.levels.IQ.normal,
				DX:ultralite.levels.DX.normal
			},
			skills: {},
			advantages: {}
		};

		// use the spec object to customize the character
		if (spec) {
      var keys = Object.keys(spec);
      keys.forEach(function (element, index) {
        that[element] = spec[element];
      });
		}
		return that;
	}
};
