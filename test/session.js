describe('session', function() {
  it("should be able to create a new session", function() {
    ultralite.session.should.exist;
    ultralite.session.should.respondTo('create');
    var session = ultralite.session.create();
    session.should.be.an('object');
  });
});
