describe('utilities', function () {
  var util = ultralite.util;
  it("should have a method for mapping properties from one object to another", function() {
    util.should.respondTo("map");
  });
});
