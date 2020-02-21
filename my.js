describe("Test Suite", function() {
	return it("has expectations", function() {
		return expect(1 + 2).toBe(3);
	})
})

describe("Asynchronous", function() {
    var a, async;
    a = 0;
    async = function() {
      return setTimeout((function() {
        return a = 5;
      }), 1000);
    };
    return it("async executes code", function() {
      runs(function() {
        return async();
      });
      return waitsFor((function() {
        return a === 5;
      }), "the value should be changed", 3000);
    });
  });
