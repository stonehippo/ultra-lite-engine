describe('turn', function() {
  it("should be able to create a new turn", function() {
    ultralite.turn.should.exist;
    ultralite.turn.should.respondTo('create');
    let turn = ultralite.turn.create();
    turn.should.be.an('object');
    turn.should.have.ownProperty("location");
    turn.should.have.ownProperty("actions");
  });
});
