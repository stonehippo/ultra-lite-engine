describe('skill', function() {
  it("should return a list of available skills", function() {
    ultralite.skill.list.should.exist;
    ultralite.skill.list().should.eql({});
  });
  it("should able to create a new skill from a spec object", function() {
    ultralite.skill.create.should.exist;
    let skill = ultralite.skill.create({name: "Knight"});
    skill.should.have.property("name");
    ultralite.skill.add(skill);
    ultralite.skill.list().should.eql({"Knight": {name: "Knight"}});
  });
  it("should be able to create a new skill from a string", function() {
    let skill = ultralite.skill.create("Ninja");
    skill.should.have.property("name");
      ultralite.skill.list().should.eql({"Knight": {name: "Knight"}, "Ninja": {name: "Ninja"}});
  });
});
