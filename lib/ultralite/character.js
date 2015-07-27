var util = require("./util.js");
var attributeLevels = require("./attributeLevels.js");
var character = {
	create: function(spec) {
		var that = {
			name: "",
			notes: "",
			attributes: {
				ST:attributeLevels.ST.normal,
				HT:attributeLevels.HT.normal,
				IQ:attributeLevels.IQ.normal,
				DX:attributeLevels.DX.normal
			},
			levels: 3,
			skills: {},
			advantages: {}
		};

		// use the spec object to customize the character
		if (spec) {
			// map included attributes to object values, and include defaults for any
			// attributes that aren't in the spec object
			if (spec.attributes) {
				Object.keys(attributeLevels).forEach(function (attribute) {
					switch (typeof spec.attributes[attribute]) {
						case 'string':
							spec.attributes[attribute] = attributeLevels[attribute][spec.attributes[attribute]];
							break;
						case 'object':
							break;
						default:
							spec.attributes[attribute] = attributeLevels[attribute].normal;
					}
				});

			}
      util.objectMap(that, spec);
		}

		return that;
	},
	loadCharactersFromLocalFile: function(filePath) {
		var characters = require(filePath);
		return characters.map(function(element) {
				return character.create(element);
		});
	}
};

module.exports = character;
