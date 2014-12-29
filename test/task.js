describe ('task', function() {
	describe('roll', function() {
		it("should return an number between 3 and 18 inclusive", function() {
			// roll the dice several times to be sure that things are working
			for(var i = 1000; i--; ) {
				ultralite.task.roll().should.be.within(3,18);
			}
		});
	});

	describe('resolution', function() {
		it("must always treat a roll of 3 as a success, regardless of base roll");
		it("must always treat a roll of 18 as a success, regardless of base roll");
		it("must treat a roll less than or equal to the base roll as a success");
		it("must treat a roll greater than to the base roll as a failure");
		it("must add -6 modifier to a task that requires training");
	});;
});