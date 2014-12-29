describe('reaction', function() {
	describe('roll', function() {
		before(function() {
			npc = ultralite.npc.create();
		});

		it("must return an number between 3 and 18 inclusive", function() {
			// roll the dice several times to be sure that things are working
			for(var i = 1000; i--; ) {
				ultralite.reaction.roll().should.be.within(3,18);
			}
		});

		it("must make a reaction roll for a given NPC", function() {
			ultralite.reaction.should.respondTo('rollForReaction');
			var reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
			['hostile','undecided','friendly'].should.include.members([reactionRoll]);
		});
	});

	describe('reaction roll', function() {
		beforeEach(function() {
			var npc = ultralite.npc.create();
		});
		it("must make an 'undecided' NPC 'hostile' on a roll of 3-6", function() {
			for (var i = 3; i <= 6; i++) {
				ultralite.reaction.roll = function() {return i};
				var reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
				npc.reaction().should.equal('hostile');
			}
		});
		it("must keep an 'undecided' NPC 'undecided' on a roll of 7-14", function() {
			for (var i = 7; i <= 14; i++) {
				ultralite.reaction.roll = function() {return i};
				var reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
				npc.reaction().should.equal('undecided');
			}
		});
		it("must make an 'undecided' NPC 'friendly' on a roll of 15-18", function() {
			for (var i = 15; i <= 18; i++) {
				ultralite.reaction.roll = function() {return i};
				var reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
				npc.reaction().should.equal('friendly');
			}
		});
	});
});