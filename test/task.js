describe ('task', function() {
	it("should be able to create a new task", function()
	{
		ultralite.task.create.should.exist;
		var task = ultralite.task.create();
		task.should.be.an("object");
		task.should.have.property("status");
		task.should.have.property("baseRoll");
		task.should.have.property("roll");
		task.should.have.property("skill");
		task.should.have.property("modifier");
		task.baseRoll.should.not.be.null;
		task.baseRoll.should.be.a('number');
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
			var task = ultralite.task.create({'baseRoll': 10});
			task.should.respondTo("resolve");
			task.resolve();
			task.roll.should.not.be.null;
			task.status.should.not.be.null;
		});
		it("must always treat a roll of 3 as a critical success, regardless of base roll and modifiers", function ()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(3);
			// the task would almost always fail, since it's at total -2
			var task = ultralite.task.create({"baseRoll": 8, "modifier": -10});
			var taskResolution = task.resolve();
			task.status.should.equal(ultralite.task.status.criticalSuccess);
			task.roll.should.equal(3);
			stub.restore();
		});
		it("must always treat a roll of 18 as a critical failure, regardless of base roll and modifiers", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(18);
			// the task would almost always succeed, since a roll of 28 or less would succeed
			var task = ultralite.task.create({"baseRoll": 18, "modifier": 10});
			var taskResolution = task.resolve();
			task.status.should.equal(ultralite.task.status.criticalFailure);
			task.roll.should.equal(18);
			stub.restore();
		});
		it("must treat a roll less than or equal to the base roll with no modifiers as a success", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(10);
			var task = ultralite.task.create();
			task.resolve();
			task.roll.should.equal(10);
			task.status.should.equal(ultralite.task.status.success);
			stub.restore();
		});
		it("must treat a roll greater than the base roll with no modifiers as a failure", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(11);
			var task = ultralite.task.create();
			task.resolve();
			task.roll.should.equal(11);
			task.status.should.equal(ultralite.task.status.failure);
			stub.restore();
		});
		it("must add -6 modifier to a task that requires training via a skill", function ()
		{
			var task = ultralite.task.create({"skill": "Knight"});
			task.skill.should.equal("Knight");
			task.modifier.should.equal(-6);
		});
		it("must correctly resolve a task with a positive modifier", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(11);
			// the task is easier that normal, so a roll of 11 should pass compared
			// to the default baseRoll of 10
			var task = ultralite.task.create({"modifier": 2});
			task.resolve();
			task.roll.should.equal(11);
			task.status.should.equal(ultralite.task.status.success);
			stub.restore();
		});
		it("must correctly resolve a task with a negative modifier", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(10);
			// the task is harder that normal, so a roll of 10 should should with
			// the default basicDoll of 10
			var task = ultralite.task.create({"modifier": -2});
			task.resolve();
			task.roll.should.equal(10);
			task.status.should.equal(ultralite.task.status.failure);
			stub.restore();
		});
		it("must correctly resolve a task with a positive modifier and a skill", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(6);
			// the task is easier that normal, but also requires a skill
			// this means that we expect it to pass on 10 + 2 - 6 = 6
			var task = ultralite.task.create({"modifier": 2, "skill": "Knight"});
			task.resolve();
			task.roll.should.equal(6);
			task.status.should.equal(ultralite.task.status.success);
			stub.restore();
			// likewise we expect the task to fail on a roll of 7 or more
			stub = sinon.stub(ultralite.task, "roll").returns(7);
			task.resolve();
			task.status.should.equal(ultralite.task.status.failure);
			stub.restore();
		});
		it("must correctly resolve a task with a negative modifier and a skill", function()
		{
			var stub = sinon.stub(ultralite.task, "roll").returns(6);
			// the task is harder that normal, but also requires a skill
			// this means that we expect it to pass on 10 - 2 - 6 = 2
			// In other words, will only pass on a criticalSuccess
			var task = ultralite.task.create({"modifier": -2, "skill": "Knight"});
			task.resolve();
			task.roll.should.equal(6);
			task.status.should.equal(ultralite.task.status.failure);
			stub.restore();
			// likewise we expect the task to fail on a roll of 7 or more
			stub = sinon.stub(ultralite.task, "roll").returns(3);
			task.resolve();
			task.status.should.equal(ultralite.task.status.criticalSuccess);
			stub.restore();
		});
	});
});
