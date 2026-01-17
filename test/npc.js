describe('non-player character', function() {
	const npc = ultralite.npc.create();

	describe('reaction', function() {
		it("must have a reaction level", function() {
			npc.should.respondTo('reaction');
			npc.reaction().should.be.a('string');
		});
	});

	describe('hostile NPC', function() {
		before( function() {
			npc.makeHostile();
		});
		it("must have a hostile reaction level", function() {
			npc.hostile().should.be.true;
		});
	});

	describe('undecided NPC', function() {
		before(function() {
			npc.makeUndecided();
		});
		it("must have an undecided reaction level", function() {
			npc.undecided().should.be.true;
		});
	});

	describe('friendly NPC', function() {
		before(function() {
			npc.makeFriendly();
		});
		it("must have a friendly reaction level", function() {
			npc.friendly().should.be.true;
		});
	});
});
