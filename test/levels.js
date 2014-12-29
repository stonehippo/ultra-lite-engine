describe('levels', function() {
	var levels = ultralite.levels

	it('should really exist', function() {
		levels.should.exist
	})

	it('should have strength levels', function() {
		levels.should.have.ownProperty('ST')
	})
	it('shold have dexterity levels', function() {
		levels.should.have.ownProperty('DX')
	})
	it('should have intelligence levels', function() {
		levels.should.have.ownProperty('IQ')
	})
	it('should have health levels', function() {
		levels.should.have.ownProperty('HT')
	})

	describe('strength (ST) levels', function() {
		it('should have four levels: Weak, Normal, Strong and Very Strong', function() {
			levels.ST.should.have.keys('weak', 'normal', 'strong', 'veryStrong')
		})
		it('all ST levels should have hit points (HP)', function() {
			Object.keys(levels.ST).forEach(function (element) {
				levels.ST[element].should.have.ownProperty('hitPoints')
			})
		})
		it('all ST level should have basic damage', function() {
			Object.keys(levels.ST).forEach(function (element) {
				levels.ST[element].should.have.ownProperty('basicDamage')
			})
		})

		describe('Weak', function() {
			it("should have 8 HP")
			it("should have 1d6/2 basic damage")
		})

		describe('Normal', function() {
			it("should have 10 HP")
			it("should have 1d6 basic damage")
		})

		describe('Strong', function() {
			it("should have 14 HP")
			it("should have 2d6 basic damage")
		})

		describe('Very Strong', function() {
			it("should have 18 HP")
			it("should have 3d6 basic damage")
		})
	});

	describe('dexterity (DX) levels', function() {
		it("should have a base roll")

		describe('Clumsy', function() {
			it("should have a base roll of 8")
		})

		describe('Normal', function() {
			it("should have a base roll of 10")
		})

		describe('Agile', function() {
			it("should have a base roll of 12")
		})

		describe('Very Agile', function() {
			it("should have a base roll of 14")
		})

		describe('Extreme', function() {
			it("should have a base roll of 16")
		})
	});

	describe('intelligence (IQ) levels', function() {
		it("should have a base roll")

		describe('Dull', function() {
			it("should have a base roll of 8")
		})

		describe('Normal', function() {
			it("should have a base roll of 10")
		})

		describe('Smart', function() {
			it("should have a base roll of 12")
		})

		describe('Very Smart', function() {
			it("should have a base roll of 14")
		})

		describe('Genuis', function() {
			it("should have a base roll of 16")
		})
	});

	describe('health (HT) levels', function() {
		it("should have a base roll")

		describe('Sickly', function() {
			it("should have a base roll of 8")
		})

		describe('Normal', function() {
			it("should have a base roll of 10")
		})

		describe('Hardy', function() {
			it("should have a base roll of 14")
		})

		describe('Vary Hardy', function() {
			it("should have a base roll of 18")
		})
	});
});