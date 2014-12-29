describe('reaction', function() {
	describe('roll', function() {
		it("must return an number between 3 and 18 inclusive", function() {
			// roll the dice several times to be sure that things are working
			for(var i = 1000; i--; ) {
				ultralite.reaction.roll().should.be.within(3,18);
			}
		});
	});

	describe('reaction roll', function() {
		it("must make an 'undecided' NPC 'hostile' on a roll of 3-6");
		it("must keep an 'undecided' NPC 'undecided' on a roll of 7-14");
		it("must make an 'undecided' NPC 'friendly' on a roll of 15-18");
	});
});