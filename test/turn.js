describe('turn', function() {
  it("should be able to create a new turn", function() {
    ultralite.turn.should.exist;
    ultralite.turn.should.respondTo('create');
    var turn = ultralite.turn.create();
    turn.should.be.an('object');
  });
});
