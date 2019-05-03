describe('skill', function() {
  it("should return a list of available skills", function() {
    ultralite.skill.list().should.eql({});
  });
  it("should able to create a new skill from spec objects", function() {
    let knight = ultralite.skill.create({name: "Knight"});
    ultralite.skill.add(knight);
    ultralite.skill.list().should.eql({"Knight": {name: "Knight", description: ""}});
    let spacer = ultralite.skill.create({
      name: "Spacer",
      description: "You know your way around a vacc suit and zero-g"})
    ultralite.skill.add(spacer);
    ultralite.skill.list().should.eql({
      "Knight": {name: "Knight", description: ""},
      "Spacer": {name: "Spacer", description: "You know your way around a vacc suit and zero-g"}
    })

  });
  it("should be able to create a new skill from a string", function() {
    let ninja = ultralite.skill.createWithString("Ninja");
    ultralite.skill.add(ninja);
    ultralite.skill.list().should.eql({
      "Knight": {name: "Knight", description: ""},
      "Spacer": {name: "Spacer", description: "You know your way around a vacc suit and zero-g"},
      "Ninja": {name: "Ninja", description: ""}
    })
    let samurai = ultralite.skill.createWithString("Samurai", "Master of blade and Bushido")
    ultralite.skill.add(samurai);
    ultralite.skill.list().should.eql({
      "Knight": {name: "Knight", description: ""},
      "Spacer": {name: "Spacer", description: "You know your way around a vacc suit and zero-g"},
      "Ninja": {name: "Ninja", description: ""},
      "Samurai": {name: "Samurai", description: "Master of blade and Bushido"}
    })    
  });
});
