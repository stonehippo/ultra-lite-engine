var ultralite = require('../lib/ultralite.js');

describe('character', function() {
	var character = ultralite.character.create({
		name: "Jane Doe"
	})

	describe('basic information', function() {
		it("must have a non-empty name", function() {
			character.should.have.ownProperty('name', 'Jane Doe')
			character.name.should.be.a('string')
			character.name.should.not.equal("")

		})
		it("may have notes", function() {
			character.should.have.property('notes')
			character.notes.should.be.a('string')
		})
	});
	describe('attributes', function() {
		it("must have ST, DX, IQ, and HT attributes", function() {
			character.should.have.ownProperty("attributes")
			character.attributes.should.have.ownProperty("ST")
			character.attributes.should.have.ownProperty("DX")
			character.attributes.should.have.ownProperty("IQ")
			character.attributes.should.have.ownProperty("HT")
		})
		it("has Normal attribute levels by default", function() {
			character.attributes.ST.should.equal(ultralite.levels.st.normal)
			character.attributes.DX.should.equal(ultralite.levels.dx.normal)
			character.attributes.IQ.should.equal(ultralite.levels.iq.normal)
			character.attributes.HT.should.equal(ultralite.levels.ht.normal)
		})
		describe('validation', function() {
			it("must only allow attributes to be set to defined levels")
		})
	});

	describe('skills', function() {
		it("must have a set of skills", function() {
			character.should.have.ownProperty("skills")
		})
	});

	describe('advantages', function() {
		it("must have a set of advantages", function() {
			character.should.have.ownProperty("advantages")
		})
	});
});