import path from "node:path";

describe('character', function() {

	const character = ultralite.character.create({
		name: "Jane Doe"
	});

	it('should be able to create a new character', function() {
		ultralite.character.should.exist;
		ultralite.character.should.respondTo('create');
	});

	it('should be able to load a character from file', function() {
		ultralite.character.should.respondTo('loadCharactersFromLocalFile');
	});

	describe('basic information', function() {
		it("must have a non-empty name", function() {
			character.should.have.ownProperty('name', 'Jane Doe');
			character.name.should.be.a('string');
			character.name.should.not.equal("");

		});
		it("may have notes", function() {
			character.should.have.property('notes');
			character.notes.should.be.a('string');
		});
		if("should have levels", function() {
			character.should.have.property('levels');
			character.levels.should.be.a('number');
		});
	});

	describe('attributes', function() {
		it("must have ST, DX, IQ, and HT attributes", function() {
			character.should.have.ownProperty("attribute");
			character.should.have.ownProperty("attributeLevel");
		});
		it("has Normal attribute levels by default", function() {
			character.attribute("ST").should.equal("normal");
			character.attributeLevel("ST").should.equal(ultralite.attributeLevels.ST.normal);
			character.attribute("DX").should.equal("normal");
			character.attributeLevel("DX").should.equal(ultralite.attributeLevels.DX.normal);
			character.attribute("IQ").should.equal("normal");
			character.attributeLevel("IQ").should.equal(ultralite.attributeLevels.IQ.normal);
			character.attribute("HT").should.equal("normal");
			character.attributeLevel("HT").should.equal(ultralite.attributeLevels.HT.normal);
		});
		it ("should be able to set attribute with a direct reference to attribute", function() {
			character.setAttributeLevel("IQ", ultralite.attributeLevels.IQ.smart);
			character.attributeLevel("IQ").should.equal(ultralite.attributeLevels.IQ.smart);
			character.attribute("IQ").should.equal("smart");
		});
		it ("should be able to set attribute with a attribute level key", function() {
			character.setAttribute("DX", "clumsy");
			character.attributeLevel("DX").should.equal(ultralite.attributeLevels.DX.clumsy);
			character.attribute("DX").should.equal("clumsy");
		});
		describe('validation', function() {
			it("must only allow attributes to be set to defined levels", function() {
				character.setAttributeLevel("ST", ultralite.attributeLevels.ST.strong);
				character.attributeLevel("ST").should.equal(ultralite.attributeLevels.ST.strong);
				character.attribute("ST").should.equal("strong");
				character.setAttributeLevel("ST", ultralite.attributeLevels.ST.nope);
				character.attribute("ST").should.equal("strong");
				character.attributeLevel("ST").should.equal(ultralite.attributeLevels.ST.strong);
				character.setAttributeLevel("ST", 1);
				character.attribute("ST").should.equal("strong");
				character.attributeLevel("ST").should.equal(ultralite.attributeLevels.ST.strong);
				character.setAttributeLevel("ST", {});
				character.attribute("ST").should.equal("strong");
				character.attributeLevel("ST").should.equal(ultralite.attributeLevels.ST.strong);
			});
		});
	});

	describe('skills', function() {
		it("must have a set of skills", function() {
			character.should.have.ownProperty("skills");
		});
	});

	describe('advantages', function() {
		it("must have a set of advantages", function() {
			character.should.have.ownProperty("advantages");
		});
	});

	describe('creation', function() {
		it("should allow for creation via a spec object", function() {
			let spec = {
		    "name": "Sir Godric",
		    "levels": 4,
		    "attributes": {
					"ST": ultralite.attributeLevels.ST.strong,
		      "DX": ultralite.attributeLevels.DX.agile,
		      "HT": ultralite.attributeLevels.HT.hardy
		    },
		    "skills": {
		      "knight": {
		        "level": 2,
		        "description": "The medieval skills of fighting and chivalry"
		      }
		    }
		  },
			sirGodric = ultralite.character.create(spec);
			// this property is not in the file
			// should be injected by the character creator
			sirGodric.should.have.property("notes");
			sirGodric.levels.should.equal(4);
			// an attribute that was not included in the character definition
			sirGodric.attributeLevel("IQ").should.equal(ultralite.attributeLevels.IQ.normal);
			sirGodric.attributeLevel("ST").should.equal(ultralite.attributeLevels.ST.strong);
		});
		it("should be able to load characters from JSON locally", function() {
			ultralite.character.should.respondTo("loadCharactersFromLocalFile");
			let characters = ultralite.character.loadCharactersFromLocalFile(path.resolve("./example/characters.json"));
			characters.length.should.equal(2);
			let sirGodric = characters[0];
			// this property is not in the file
			// should be injected by the character creator
			sirGodric.should.have.property("notes");
			sirGodric.levels.should.equal(4);
			// an attribute that was not included in the character definition
			sirGodric.attributeLevel("IQ").should.equal(ultralite.attributeLevels.IQ.normal);
			sirGodric.attributeLevel("ST").should.equal(ultralite.attributeLevels.ST.strong);
		});
	});
});
