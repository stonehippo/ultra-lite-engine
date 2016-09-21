describe('attributes', function() {
  let attributeLevels = ultralite.attributeLevels;

  it('should really exist', function() {
    attributeLevels.should.exist;
  });

  it('should have strength attributes', function() {
    attributeLevels.should.have.ownProperty('ST');
  });
  it('should have dexterity attributes', function() {
    attributeLevels.should.have.ownProperty('DX');
  });
  it('should have intelligence attributes', function() {
    attributeLevels.should.have.ownProperty('IQ');
  });
  it('should have health attributes', function() {
    attributeLevels.should.have.ownProperty('HT');
  });

  describe('strength (ST) attributes', function() {
    it('should have four attributes: Weak, Normal, Strong and Very Strong', function() {
      attributeLevels.ST.should.have.keys('weak', 'normal', 'strong', 'veryStrong');
    });

    it("should have a base roll", function() {
      Object.keys(attributeLevels.ST).forEach(function (element) {
        attributeLevels.ST[element].should.have.ownProperty('baseRoll');
      });
    });

    it('all ST attributes should have hit points (HP)', function() {
      Object.keys(attributeLevels.ST).forEach(function (element) {
        attributeLevels.ST[element].should.have.ownProperty('hitPoints');
      });
    });

    it('all ST levels should have basic damage', function() {
      Object.keys(attributeLevels.ST).forEach(function (element) {
        attributeLevels.ST[element].should.have.ownProperty('basicDamage');
      });
    });

    describe('Weak', function() {
      it("should have a base roll of 8", function() {
          attributeLevels.ST.weak.baseRoll.should.equal(8);
      });

      it("should have 8 HP", function() {
        attributeLevels.ST.weak.hitPoints.should.equal(8);
      });
      it("should have 1d6/2 basic damage", function() {
        attributeLevels.ST.weak.basicDamage.should.equal("1d6/2");
      });
    });

    describe('Normal', function() {
      it("should have a base roll of 10", function() {
          attributeLevels.ST.normal.baseRoll.should.equal(10);
      });

      it("should have 10 HP", function() {
        attributeLevels.ST.normal.hitPoints.should.equal(10);
      });
      it("should have 1d6 basic damage", function() {
        attributeLevels.ST.normal.basicDamage.should.equal("1d6");
      });
    });

    describe('Strong', function() {
      it("should have a base roll of 14", function() {
          attributeLevels.ST.strong.baseRoll.should.equal(14);
      });

      it("should have 14 HP", function() {
        attributeLevels.ST.strong.hitPoints.should.equal(14);
      });
      it("should have 2d6 basic damage", function() {
        attributeLevels.ST.strong.basicDamage.should.equal("2d6");
      });
    });

    describe('Very Strong', function() {
      it("should have a base roll of 18", function() {
          attributeLevels.ST.veryStrong.baseRoll.should.equal(18);
      });

      it("should have 18 HP", function() {
        attributeLevels.ST.veryStrong.hitPoints.should.equal(18);
      });
      it("should have 3d6 basic damage", function() {
        attributeLevels.ST.veryStrong.basicDamage.should.equal("3d6");
      });
    });
  });

  describe('dexterity (DX) attributes', function() {
    it('should have five attributes: Clumsy, Normal, Agile, Very Agile, and Extreme', function() {
      attributeLevels.DX.should.have.keys('clumsy', 'normal', 'agile', 'veryAgile', 'extreme');
    });

    it("should have a base roll", function() {
      Object.keys(attributeLevels.DX).forEach(function (element) {
        attributeLevels.DX[element].should.have.ownProperty('baseRoll');
      });
    });

    describe('Clumsy', function() {
      it("should have a base roll of 8", function() {
        attributeLevels.DX.clumsy.baseRoll.should.equal(8);
      });
    });

    describe('Normal', function() {
      it("should have a base roll of 10", function() {
        attributeLevels.DX.normal.baseRoll.should.equal(10);
      });
    });

    describe('Agile', function() {
      it("should have a base roll of 12", function() {
        attributeLevels.DX.agile.baseRoll.should.equal(12);
      });
    });

    describe('Very Agile', function() {
      it("should have a base roll of 14", function() {
        attributeLevels.DX.veryAgile.baseRoll.should.equal(14);
      });
    });

    describe('Extreme', function() {
      it("should have a base roll of 16", function() {
        attributeLevels.DX.extreme.baseRoll.should.equal(16);
      });
    });
  });

  describe('intelligence (IQ) attributes', function() {
    it('should have five attributes: Dull, Normal, Smart, Very Smart, and Genius', function() {
      attributeLevels.IQ.should.have.keys('dull', 'normal', 'smart', 'verySmart', 'genius');
    });

    it("should have a base roll", function() {
      Object.keys(attributeLevels.IQ).forEach(function (element) {
        attributeLevels.IQ[element].should.have.ownProperty('baseRoll');
      });
    });
    describe('Dull', function() {
      it("should have a base roll of 8", function() {
        attributeLevels.IQ.dull.baseRoll.should.equal(8);
      });
    });

    describe('Normal', function() {
      it("should have a base roll of 10", function() {
        attributeLevels.IQ.normal.baseRoll.should.equal(10);
      });
    });

    describe('Smart', function() {
      it("should have a base roll of 12", function() {
        attributeLevels.IQ.smart.baseRoll.should.equal(12);
      });
    });

    describe('Very Smart', function() {
      it("should have a base roll of 14", function() {
        attributeLevels.IQ.verySmart.baseRoll.should.equal(14);
      });
    });

    describe('Genuis', function() {
      it("should have a base roll of 16", function() {
        attributeLevels.IQ.genius.baseRoll.should.equal(16);
      });
    });
  });

  describe('health (HT) attributes', function() {
    it('should have four attributes: Sickly, Normal, Hardy, and Very Hardy', function() {
      attributeLevels.HT.should.have.keys('sickly', 'normal', 'hardy', 'veryHardy');
    });

    it("should have a base roll", function() {
      Object.keys(attributeLevels.HT).forEach(function (element) {
        attributeLevels.HT[element].should.have.ownProperty('baseRoll');
      });
    });
    describe('Sickly', function() {
      it("should have a base roll of 8", function() {
        attributeLevels.HT.sickly.baseRoll.should.equal(8);
      });
    });

    describe('Normal', function() {
      it("should have a base roll of 10", function() {
        attributeLevels.HT.normal.baseRoll.should.equal(10);
      });
    });

    describe('Hardy', function() {
      it("should have a base roll of 14", function() {
        attributeLevels.HT.hardy.baseRoll.should.equal(14);
      });
    });

    describe('Vary Hardy', function() {
      it("should have a base roll of 18", function() {
        attributeLevels.HT.veryHardy.baseRoll.should.equal(18);
      });
    });
  });
});
