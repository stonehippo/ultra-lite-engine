describe ('task', function() {
	it("should be able to create a new task", function()
	{
		ultralite.task.create.should.exist;
		var task = ultralite.task.create();
		task.should.be.an("object");
		task.should.have.property("status");
		task.should.have.property("difficulty");
		task.should.have.property("roll");
		task.should.have.property("skill");
		task.should.have.property("modifier");
	});
	describe('roll', function() {
		it("should return an number between 3 and 18 inclusive", function() {
			// roll the dice several times to be sure that things are working
			for(var i = 1000; i--; ) {
				ultralite.task.roll().should.be.within(3,18);
			}
		});
	});

	describe('resolution', function() {
		it("must have a resolve method that sets the status and roll for the task", function()
		{
			var task = ultralite.task.create({'difficulty': 10});
			task.should.respondTo("resolve");
			task.resolve();
			task.roll.should.not.be.null;
			task.status.should.not.be.null;
		});
		it("must always treat a roll of 3 as a critical success, regardless of base roll", function ()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(3);
			var task = ultralite.task.create({'difficulty': 10});
			var taskResolution = task.resolve();
			task.status.should.equal(ultralite.task.status.criticalSuccess);
			task.roll.should.equal(3);
			stub.restore();
		});
		it("must always treat a roll of 18 as a critical failure, regardless of base roll", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(18);
			var task = ultralite.task.create({'difficulty': 10});
			var taskResolution = task.resolve();
			task.status.should.equal(ultralite.task.status.criticalFailure);
			task.roll.should.equal(18);
			stub.restore();
		});
		it("must treat a roll less than or equal to the base roll as a success");
		it("must treat a roll greater than the base roll as a failure");
		it("must add -6 modifier to a task that requires training");
	});
});
