import path from "node:path";
import { readFileSync } from "node:fs";

console.log(should);
describe('session', function() {
  let session;
  beforeEach(function() {
    session = ultralite.session.create();
  });

  // deno-lint-ignore no-unused-vars
  let characters;
  before(function() {
    const characterFile = readFileSync(path.resolve("./example/characters.json"), 'utf8');
    characters = JSON.parse(characterFile);
  })

  it("should be able to create a new session", function() {
    ultralite.session.should.exist;
    ultralite.session.should.respondTo('create');
    session.should.be.an('object');
    session.should.have.ownProperty('turns');
    session.turns.should.be.an('array');
    session.state.should.equal(ultralite.session.state.created);
  });

  it("should be able to register a group of player characters", function() {
    session.characters.should.to.be.an('array');
    session.characters.should.be.empty;
    session.should.respondTo("addCharacters");
    const characters = ultralite.character.loadCharactersFromLocalFile(path.resolve("./example/characters.json"));
    session.addCharacters(characters);
    session.characters.length.should.be.equal(2);
    session.characters[0].name.should.equal('Sir Godric');
  });
  it("should be able to register a set of places");
  it("should be able to register a set of NPCs");
  it("should be able to place NPCs in places");

  it("should be able to start itself", function()
  {
      session.should.respondTo("start");
      session.start();
      session.state.should.equal(ultralite.session.state.inProgress);
      session.turns.length.should.equal(1);
  });

  it("should be able to end itself", function()
  {
    session.should.respondTo("end");
    session.end();
    session.state.should.equal(ultralite.session.state.ended);
  });

  it("should be able to start a new turn only if the session is in progress ", function() {
    session.should.respondTo("nextTurn");
    let turn = session.nextTurn(); // expect null, as session has not started
    should.not.exist(turn);
    session.start();
    turn = session.nextTurn();
    turn.should.be.an("object");
  });

  it("should take an optional spec object for the new turn", function() {
    const spec = {"location": "The Forest"};
    session.start();
    const turn = session.nextTurn(spec);
    turn.location.should.equal("The Forest");
  });

  it("should be able to retrieve the current turn", function() {
    session.should.respondTo("currentTurn");
    let turn = session.currentTurn(); // expect null, as the session has not started
    should.not.exist(turn);
    session.start();
    session.nextTurn(); // have to give the session at least one turn
    turn = session.currentTurn();
    turn.should.equal(session.turns[0]);
  });

});
