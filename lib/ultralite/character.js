module.exports = {
	create: function(spec) {
		var that = {
			name: "",
			notes: "",
			attributes: {
				ST:ultralite.attributes.ST.normal,
				HT:ultralite.attributes.HT.normal,
				IQ:ultralite.attributes.IQ.normal,
				DX:ultralite.attributes.DX.normal
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
