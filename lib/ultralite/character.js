var util = require("./util.js");
var attributeLevels = require("./attributeLevels.js");
var character = {
	create: function(spec) {
		var _attributes = {
			ST:attributeLevels.ST.normal,
			HT:attributeLevels.HT.normal,
			IQ:attributeLevels.IQ.normal,
			DX:attributeLevels.DX.normal
		}
		var that = {
			name: "",
			notes: "",
			attribute: function(attribute) {
				return _attributes[attribute];
			},
			setAttribute: function(attribute, level) {
				if (Object.getOwnPropertyNames(attributeLevels)
					.filter(function(el) {
						if (el == attribute) return true;
					}).length != 0
					&& typeof level === "object"
				) {
					for (var attributeLevel in attributeLevels[attribute]) {
						if (level === attributeLevels[attribute][attributeLevel]) {
							_attributes[attribute] = level;
						}
					}
				}
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
							that.setAttribute(attribute, attributeLevels[attribute][spec.attributes[attribute]]);
							break;
						case 'object':
						that.setAttribute(attribute, spec.attributes[attribute]);
							break;
						default:
							that.setAttribute(attribute, attributeLevels[attribute].normal);
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
