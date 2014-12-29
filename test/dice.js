describe('dice', function() {
	it("should allow a number of dice to be set",function() {
		ultralite.dice.should.respondTo('rollWithDiceCountOf');
	});
	it("should allow a range of values to be accepted", function() {
		ultralite.dice.should.respondTo('rollWithRange');
	});
	it("should require a minimum range argument", function() {
		ultralite.dice.rollWithRange.should.throw(/min value not specified/);
	});
	it("should require that the min range is an integer of at least 1", function() {
		var fn = function() {ultralite.dice.rollWithRange(0,0);}
		fn.should.throw(/min value must be <= 1/);
		fn = function() {ultralite.dice.rollWithRange(1.1,0);}
		fn.should.throw(/min value must be an integer/);
	});
	it("should require a maximum range argument", function() {
		var fn = function() {ultralite.dice.rollWithRange(0);}
		fn.should.throw(/max value not specified/);
	});
	it("should require that the max argument is an integer great than min", function() {
		var fn = function() {ultralite.dice.rollWithRange(1,2.1);}
		fn.should.throw(/max value must be an integer/);
		fn = function() {ultralite.dice.rollWithRange(2,1);}
		fn.should.throw(/max must be greater than min/);
	});
	it("should require at least one die",function() {
		ultralite.dice.rollWithDiceCountOf.should.throw(RangeError);
	});
});
