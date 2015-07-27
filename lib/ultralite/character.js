var util = require("./util.js");
var character = {
	attributeLevels: {
		ST: {
			weak: {
				baseRoll: 8,
				hitPoints: 8,
				basicDamage: "1d6/2"
			},
			normal: {
				baseRoll: 10,
				hitPoints: 10,
				basicDamage: "1d6"
			},
			strong: {
				baseRoll: 14,
				hitPoints: 14,
				basicDamage: "2d6"
			},
			veryStrong: {
				baseRoll: 18,
				hitPoints: 18,
				basicDamage: "3d6"
			}
		},
		DX: {
			clumsy: {
				baseRoll: 8
			},
			normal: {
				baseRoll: 10
			},
			agile: {
				baseRoll: 12
			},
			veryAgile: {
				baseRoll: 14
			},
			extreme: {
				baseRoll: 16
			}
		},
		IQ: {
			dull: {
				baseRoll: 8
			},
			normal: {
				baseRoll: 10
			},
			smart: {
				baseRoll: 12
			},
			verySmart: {
				baseRoll: 14
			},
			genius: {
				baseRoll: 16
			}
		},
		HT:  {
			sickly: {
				baseRoll: 8
			},
			normal: {
				baseRoll: 10
			},
			hardy: {
				baseRoll: 14
			},
			veryHardy: {
				baseRoll: 18
			}
		}
	},
	create: function(spec) {
		var that = {
			name: "",
			notes: "",
			attributes: {
				ST:character.attributeLevels.ST.normal,
				HT:character.attributeLevels.HT.normal,
				IQ:character.attributeLevels.IQ.normal,
				DX:character.attributeLevels.DX.normal
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
				Object.keys(character.attributeLevels).forEach(function (attribute) {
					switch (typeof spec.attributes[attribute]) {
						case 'string':
							spec.attributes[attribute] = character.attributeLevels[attribute][spec.attributes[attribute]];
							break;
						case 'object':
							break;
						default:
							spec.attributes[attribute] = character.attributeLevels[attribute].normal;
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
