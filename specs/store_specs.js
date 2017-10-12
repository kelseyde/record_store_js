var assert = require("assert");
var Store = require("../store");
var Record = require("../record");

describe("Store", function() {
  var record;
  var record2;
  var store;

  beforeEach(function() {
    record = new Record("Converge", "Jane Doe", "Hardcore", 10);
    record2 = new Record("Simon and Garfunkel", "Bridge Over Troubled Water", "Folk", 100);
    store = new Store("Gets.Records", "Glasgow");
  });

  it("should have a name", function() {
    assert.strictEqual(store.name, "Gets.Records");
  });

  it("should have a city", function() {
    assert.strictEqual(store.city, "Glasgow");
  });

  it("should start with an empty inventory", function() {
    assert.strictEqual(store.inventory.length, 0);
  });

});
