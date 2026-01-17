describe('utilities', function () {
  // const util = ultralite.util;
  it("should have a method for mapping properties from one object to another", function() {
    ultralite.util.should.respondTo("objectMap");
  });
});
