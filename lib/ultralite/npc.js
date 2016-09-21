import character from "./character.js";

const npc = {
	create(spec) {
		if (!spec) {
			spec = {};
		}

		let that = character.create(spec),
			reaction = "undecided";

		if (!spec.reaction) {
			reaction = "undecided";
		}

		that.reaction = function() {
			return reaction;
		};

		that.hostile = function() {
			return reaction === "hostile";
		};

		that.makeHostile = function() {
			reaction = "hostile";
		};

		that.undecided = function() {
			return reaction === "undecided";
		};

		that.makeUndecided = function() {
			reaction = "undecided";
		};

		that.friendly = function() {
			return reaction === "friendly";
		};

		that.makeFriendly = function() {
			reaction = "friendly";
		};

		return that;
	}
};

export default npc;
