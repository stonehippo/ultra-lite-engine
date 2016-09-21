describe('utilities', function () {
  let util = ultralite.util;
  it("should have a method for mapping properties from one object to another", function() {
    util.should.respondTo("objectMap");
  });
});
