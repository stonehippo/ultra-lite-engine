describe('session', function() {
  var session = ultralite.session.create();

  it("should be able to create a new session", function() {
    ultralite.session.should.exist;
    ultralite.session.should.respondTo('create');
    var session = ultralite.session.create();
    session.should.be.an('object');
    session.should.have.ownProperty('turns');
    session.turns.should.be.an('array');
  });

  it("should be able to start a new turn", function() {
    session.should.respondTo("nextTurn");
    var turn = session.nextTurn();
    turn.should.be.an("object");
  });

  it("should take take an optional spec object for the new turn", function() {
    var spec = {"location": "The Forest"};
    var turn = session.nextTurn(spec);
    turn.location.should.equal("The Forest");
  });

  it("should be able to retrieve the current turn", function() {
    session.should.respondTo("currentTurn");
    var turn = session.currentTurn();
    turn.should.equal(session.turns[0]);
  });
});
