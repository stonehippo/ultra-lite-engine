var util = require("./util.js");
var attributeLevels = require("./attributeLevels.js");

var character = {
	create: function(spec) {
		var _attributes = {
			ST: {name: "normal", level: attributeLevels.ST.normal},
			HT: {name: "normal", level: attributeLevels.HT.normal},
			IQ: {name: "normal", level: attributeLevels.IQ.normal},
			DX: {name: "normal", level: attributeLevels.DX.normal}
		}
		var that = {
			name: "",
			notes: "",
			attribute: function(attribute) {
				return _attributes[attribute].name;
			},
			attributeLevel: function(attribute) {
				return _attributes[attribute].level;
			},
			setAttribute: function(attribute, value) {
				if (Object.getOwnPropertyNames(attributeLevels)
					.filter(function(el) {
						if (el == attribute) return true;
					}).length != 0
					&& attributeLevels[attribute].hasOwnProperty(value)
				) {
					_attributes[attribute].name = value;
					_attributes[attribute].level = attributeLevels[attribute][value];
				}
			},
			setAttributeLevel: function(attribute, level) {
				if (Object.getOwnPropertyNames(attributeLevels)
					.filter(function(el) {
						if (el == attribute) return true;
					}).length != 0
					&& typeof level === "object"
				) {
					for (var attributeLevel in attributeLevels[attribute]) {
						if (level === attributeLevels[attribute][attributeLevel]) {
							_attributes[attribute].level = level;
							_attributes[attribute].name = attributeLevel;
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
							that.setAttribute(attribute, spec.attributes[attribute]);
							break;
						case 'object':
						that.setAttributeLevel(attribute, spec.attributes[attribute]);
							break;
						default:
							that.setAttributeLevel(attribute, attributeLevels[attribute].normal);
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
