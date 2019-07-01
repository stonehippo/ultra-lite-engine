/*
	As general note, the dice rolling is the one part of the ULE API
	that isn't really functional, as it relies on random numbers,
	
	Therefore, to test it, with look for some general properties of
	the acculated rolls, and of singluar dice
*/
// to properly test rolls, we need to do a large number of them
const rollNtimes = (n, f) => {
	let i = 0;
	let o = [];
	while ( i < n ) {
		o.push(f());
		i++;
	}
	return o;	
}
// to check that dice are actually doing what we want,
// roll a number of times an observe the distribution
const reducer = (a, v) => {
	const id = v.toString();
	if (!a.hasOwnProperty(id)) {
		a[id] = 1;
	} else {
		a[id]++;
	}
	return a;
}

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
		let fn = function() {ultralite.dice.rollWithRange(0,0);};
		fn.should.throw(/min value must be <= 1/);
		fn = function() {ultralite.dice.rollWithRange(1.1,0);};
		fn.should.throw(/min value must be an integer/);
	});
	it("should require a maximum range argument", function() {
		let fn = function() {ultralite.dice.rollWithRange(0);};
		fn.should.throw(/max value not specified/);
	});
	it("should require that the max argument is an integer greater than min", function() {
		let fn = function() {ultralite.dice.rollWithRange(1,2.1);};
		fn.should.throw(/max value must be an integer/);
		fn = function() {ultralite.dice.rollWithRange(2,1);};
		fn.should.throw(/max must be greater than min/);
	});
	it("should require at least one die",function() {
		ultralite.dice.rollWithDiceCountOf.should.throw(RangeError);
	});
	it("should require normal dice of 4, 6, 8, 10, 12, or 20 sides", function() {
		let fn = function() {ultralite.dice.rollWithDiceCountOf(1,7)};
		fn.should.throw(RangeError)
	});
	it("should return the full range of values for the number of dice", function() {
		let d2 = () => ultralite.dice.rollWithDiceCountOf(2);
		let rolls = rollNtimes(1000, d2);
		rolls.reduce(reducer, {}).should.have.all.keys('2','3','4','5','6','7','8','9','10','11','12');
	});
	it("should return a normal distribution for multiple dice (check output manually!)", function() {
		let d2 = () => ultralite.dice.rollWithDiceCountOf(2);
		let rolls = rollNtimes(1000, d2);
		console.log(rolls.reduce(reducer,{}));
	});
});
