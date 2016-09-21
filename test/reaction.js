describe('reaction', function() {
	describe('roll', function() {
		it("must return an number between 3 and 18 inclusive", function() {
			// roll the dice several times to be sure that things are working
			for(let i = 1000; i--; ) {
				ultralite.reaction.roll().should.be.within(3,18);
			}
		});

		it("must make a reaction roll for a given NPC", function() {
			let npc = ultralite.npc.create();
			ultralite.reaction.should.respondTo('rollForReaction');
			let reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
			['hostile','undecided','friendly'].should.include.members([reactionRoll]);
		});
	});

	describe('reaction roll', function() {
		it("must make an 'undecided' NPC 'hostile' on a roll of 3-6", function() {
			for (let i = 3; i <= 6; i++) {
				let npc = ultralite.npc.create();
				let stub = sinon.stub(ultralite.reaction, "roll").returns(i);
				let reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
				npc.reaction().should.equal('hostile');
				ultralite.reaction.roll.restore();
			}
		});
		it("must keep an 'undecided' NPC 'undecided' on a roll of 7-14", function() {
			for (let i = 7; i <= 14; i++) {
				let npc = ultralite.npc.create();
				let stub = sinon.stub(ultralite.reaction, "roll").returns(i);
				let reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
				npc.reaction().should.equal('undecided');
				ultralite.reaction.roll.restore();
			}
		});
		it("must make an 'undecided' NPC 'friendly' on a roll of 15-18", function() {
			for (let i = 15; i <= 18; i++) {
				let npc = ultralite.npc.create();
				let stub = sinon.stub(ultralite.reaction, "roll").returns(i);
				let reactionRoll = ultralite.reaction.rollForReaction(npc, {}, ultralite.reaction.roll());
				npc.reaction().should.equal('friendly');
				ultralite.reaction.roll.restore();
			}
		});
	});
});
