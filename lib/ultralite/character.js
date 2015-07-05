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
			levels: 3,
			skills: {},
			advantages: {}
		};

		// use the spec object to customize the character
		if (spec) {
      ultralite.util.objectMap(that, spec);
		}
		return that;
	}
};
