describe('levels', function() {
	var levels = ultralite.levels;

	it('should really exist', function() {
		levels.should.exist;
	});

	it('should have strength levels', function() {
		levels.should.have.ownProperty('ST');
	});
	it('shold have dexterity levels', function() {
		levels.should.have.ownProperty('DX');
	});
	it('should have intelligence levels', function() {
		levels.should.have.ownProperty('IQ');
	});
	it('should have health levels', function() {
		levels.should.have.ownProperty('HT');
	});

	describe('strength (ST) levels', function() {
		it('should have four levels: Weak, Normal, Strong and Very Strong', function() {
			levels.ST.should.have.keys('weak', 'normal', 'strong', 'veryStrong');
		});
		it('all ST levels should have hit points (HP)', function() {
			Object.keys(levels.ST).forEach(function (element) {
				levels.ST[element].should.have.ownProperty('hitPoints');
			});
		});
		it('all ST level should have basic damage', function() {
			Object.keys(levels.ST).forEach(function (element) {
				levels.ST[element].should.have.ownProperty('basicDamage');
			});
		});

		describe('Weak', function() {
			it("should have 8 HP", function() {
				levels.ST.weak.hitPoints.should.equal(8);
			});
			it("should have 1d6/2 basic damage", function() {
				levels.ST.weak.basicDamage.should.equal("1d6/2");
			});
		});

		describe('Normal', function() {
			it("should have 10 HP", function() {
				levels.ST.normal.hitPoints.should.equal(10);
			});
			it("should have 1d6 basic damage", function() {
				levels.ST.normal.basicDamage.should.equal("1d6");
			});
		});

		describe('Strong', function() {
			it("should have 14 HP", function() {
				levels.ST.strong.hitPoints.should.equal(14);
			});
			it("should have 2d6 basic damage", function() {
				levels.ST.strong.basicDamage.should.equal("2d6");
			});
		});

		describe('Very Strong', function() {
			it("should have 18 HP", function() {
				levels.ST.veryStrong.hitPoints.should.equal(18);
			});
			it("should have 3d6 basic damage", function() {
				levels.ST.veryStrong.basicDamage.should.equal("3d6");
			});
		});
	});

	describe('dexterity (DX) levels', function() {
		it('should have five levels: Clumsy, Normal, Agile, Very Agile, and Extreme', function() {
			levels.DX.should.have.keys('clumsy', 'normal', 'agile', 'veryAgile', 'extreme');
		});

		it("should have a base roll", function() {
			Object.keys(levels.DX).forEach(function (element) {
				levels.DX[element].should.have.ownProperty('baseRoll');
			});
		});

		describe('Clumsy', function() {
			it("should have a base roll of 8", function() {
				levels.DX.clumsy.baseRoll.should.equal(8);
			});
		});

		describe('Normal', function() {
			it("should have a base roll of 10", function() {
				levels.DX.normal.baseRoll.should.equal(10);
			});
		});

		describe('Agile', function() {
			it("should have a base roll of 12", function() {
				levels.DX.agile.baseRoll.should.equal(12);
			});
		});

		describe('Very Agile', function() {
			it("should have a base roll of 14", function() {
				levels.DX.veryAgile.baseRoll.should.equal(14);
			});
		});

		describe('Extreme', function() {
			it("should have a base roll of 16", function() {
				levels.DX.extreme.baseRoll.should.equal(16);
			});
		});
	});

	describe('intelligence (IQ) levels', function() {
		it('should have five levels: Dull, Normal, Smart, Very Smart, and Genius', function() {
			levels.IQ.should.have.keys('dull', 'normal', 'smart', 'verySmart', 'genius');
		});

		it("should have a base roll", function() {
			Object.keys(levels.IQ).forEach(function (element) {
				levels.IQ[element].should.have.ownProperty('baseRoll');
			});
		});
		describe('Dull', function() {
			it("should have a base roll of 8", function() {
				levels.IQ.dull.baseRoll.should.equal(8);
			});
		});

		describe('Normal', function() {
			it("should have a base roll of 10", function() {
				levels.IQ.normal.baseRoll.should.equal(10);
			});
		});

		describe('Smart', function() {
			it("should have a base roll of 12", function() {
				levels.IQ.smart.baseRoll.should.equal(12);
			});
		});

		describe('Very Smart', function() {
			it("should have a base roll of 14", function() {
				levels.IQ.verySmart.baseRoll.should.equal(14);
			});
		});

		describe('Genuis', function() {
			it("should have a base roll of 16", function() {
				levels.IQ.genius.baseRoll.should.equal(16);
			});
		});
	});

	describe('health (HT) levels', function() {
		it('should have four levels: Sickly, Normal, Hardy, and Very Hardy', function() {
			levels.HT.should.have.keys('sickly', 'normal', 'hardy', 'veryHardy');
		});

		it("should have a base roll", function() {
			Object.keys(levels.HT).forEach(function (element) {
				levels.HT[element].should.have.ownProperty('baseRoll');
			});
		});
		describe('Sickly', function() {
			it("should have a base roll of 8", function() {
				levels.HT.sickly.baseRoll.should.equal(8);
			});
		});

		describe('Normal', function() {
			it("should have a base roll of 10", function() {
				levels.HT.normal.baseRoll.should.equal(10);
			});
		});

		describe('Hardy', function() {
			it("should have a base roll of 14", function() {
				levels.HT.hardy.baseRoll.should.equal(14);
			});
		});

		describe('Vary Hardy', function() {
			it("should have a base roll of 18", function() {
				levels.HT.veryHardy.baseRoll.should.equal(18);
			});
		});
	});
});