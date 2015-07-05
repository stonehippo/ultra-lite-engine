describe('attributes', function() {
	var attributes = ultralite.attributes;

	it('should really exist', function() {
		attributes.should.exist;
	});

	it('should have strength attributes', function() {
		attributes.should.have.ownProperty('ST');
	});
	it('should have dexterity attributes', function() {
		attributes.should.have.ownProperty('DX');
	});
	it('should have intelligence attributes', function() {
		attributes.should.have.ownProperty('IQ');
	});
	it('should have health attributes', function() {
		attributes.should.have.ownProperty('HT');
	});

	describe('strength (ST) attributes', function() {
		it('should have four attributes: Weak, Normal, Strong and Very Strong', function() {
			attributes.ST.should.have.keys('weak', 'normal', 'strong', 'veryStrong');
		});
		it('all ST attributes should have hit points (HP)', function() {
			Object.keys(attributes.ST).forEach(function (element) {
				attributes.ST[element].should.have.ownProperty('hitPoints');
			});
		});
		it('all ST levels should have basic damage', function() {
			Object.keys(attributes.ST).forEach(function (element) {
				attributes.ST[element].should.have.ownProperty('basicDamage');
			});
		});

		describe('Weak', function() {
			it("should have 8 HP", function() {
				attributes.ST.weak.hitPoints.should.equal(8);
			});
			it("should have 1d6/2 basic damage", function() {
				attributes.ST.weak.basicDamage.should.equal("1d6/2");
			});
		});

		describe('Normal', function() {
			it("should have 10 HP", function() {
				attributes.ST.normal.hitPoints.should.equal(10);
			});
			it("should have 1d6 basic damage", function() {
				attributes.ST.normal.basicDamage.should.equal("1d6");
			});
		});

		describe('Strong', function() {
			it("should have 14 HP", function() {
				attributes.ST.strong.hitPoints.should.equal(14);
			});
			it("should have 2d6 basic damage", function() {
				attributes.ST.strong.basicDamage.should.equal("2d6");
			});
		});

		describe('Very Strong', function() {
			it("should have 18 HP", function() {
				attributes.ST.veryStrong.hitPoints.should.equal(18);
			});
			it("should have 3d6 basic damage", function() {
				attributes.ST.veryStrong.basicDamage.should.equal("3d6");
			});
		});
	});

	describe('dexterity (DX) attributes', function() {
		it('should have five attributes: Clumsy, Normal, Agile, Very Agile, and Extreme', function() {
			attributes.DX.should.have.keys('clumsy', 'normal', 'agile', 'veryAgile', 'extreme');
		});

		it("should have a base roll", function() {
			Object.keys(attributes.DX).forEach(function (element) {
				attributes.DX[element].should.have.ownProperty('baseRoll');
			});
		});

		describe('Clumsy', function() {
			it("should have a base roll of 8", function() {
				attributes.DX.clumsy.baseRoll.should.equal(8);
			});
		});

		describe('Normal', function() {
			it("should have a base roll of 10", function() {
				attributes.DX.normal.baseRoll.should.equal(10);
			});
		});

		describe('Agile', function() {
			it("should have a base roll of 12", function() {
				attributes.DX.agile.baseRoll.should.equal(12);
			});
		});

		describe('Very Agile', function() {
			it("should have a base roll of 14", function() {
				attributes.DX.veryAgile.baseRoll.should.equal(14);
			});
		});

		describe('Extreme', function() {
			it("should have a base roll of 16", function() {
				attributes.DX.extreme.baseRoll.should.equal(16);
			});
		});
	});

	describe('intelligence (IQ) attributes', function() {
		it('should have five attributes: Dull, Normal, Smart, Very Smart, and Genius', function() {
			attributes.IQ.should.have.keys('dull', 'normal', 'smart', 'verySmart', 'genius');
		});

		it("should have a base roll", function() {
			Object.keys(attributes.IQ).forEach(function (element) {
				attributes.IQ[element].should.have.ownProperty('baseRoll');
			});
		});
		describe('Dull', function() {
			it("should have a base roll of 8", function() {
				attributes.IQ.dull.baseRoll.should.equal(8);
			});
		});

		describe('Normal', function() {
			it("should have a base roll of 10", function() {
				attributes.IQ.normal.baseRoll.should.equal(10);
			});
		});

		describe('Smart', function() {
			it("should have a base roll of 12", function() {
				attributes.IQ.smart.baseRoll.should.equal(12);
			});
		});

		describe('Very Smart', function() {
			it("should have a base roll of 14", function() {
				attributes.IQ.verySmart.baseRoll.should.equal(14);
			});
		});

		describe('Genuis', function() {
			it("should have a base roll of 16", function() {
				attributes.IQ.genius.baseRoll.should.equal(16);
			});
		});
	});

	describe('health (HT) attributes', function() {
		it('should have four attributes: Sickly, Normal, Hardy, and Very Hardy', function() {
			attributes.HT.should.have.keys('sickly', 'normal', 'hardy', 'veryHardy');
		});

		it("should have a base roll", function() {
			Object.keys(attributes.HT).forEach(function (element) {
				attributes.HT[element].should.have.ownProperty('baseRoll');
			});
		});
		describe('Sickly', function() {
			it("should have a base roll of 8", function() {
				attributes.HT.sickly.baseRoll.should.equal(8);
			});
		});

		describe('Normal', function() {
			it("should have a base roll of 10", function() {
				attributes.HT.normal.baseRoll.should.equal(10);
			});
		});

		describe('Hardy', function() {
			it("should have a base roll of 14", function() {
				attributes.HT.hardy.baseRoll.should.equal(14);
			});
		});

		describe('Vary Hardy', function() {
			it("should have a base roll of 18", function() {
				attributes.HT.veryHardy.baseRoll.should.equal(18);
			});
		});
	});
});