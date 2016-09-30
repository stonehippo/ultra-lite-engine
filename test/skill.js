describe('skill', function() {
  it("should able to create a new skill", function() {
    ultralite.skill.create.should.exist;
    let skill = ultralite.skill.create({name: "Knight"});
    skill.should.have.property("name");
  });
});
