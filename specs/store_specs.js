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
    store = new Store("Gets.Records", "Glasgow", 1000);
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

  it("should have a balance", function() {
    assert.strictEqual(store.balance, 1000);
  });

  it("should be able to add records", function() {
    store.addRecord(record);
    assert.strictEqual(store.inventory.length, 1);
    assert.strictEqual(store.inventory[0].title, "Jane Doe");
  });

  it("should be able to list inventory", function() {
    store.addRecord(record);
    store.addRecord(record2);
    assert.strictEqual(store.printInventory(), "Converge: Jane Doe. Simon and Garfunkel: Bridge Over Troubled Water.");
  });

  it("should be able to sell a record", function() {
    store.addRecord(record);
    store.addRecord(record2);
    store.sellRecord(record);
    assert.strictEqual(store.inventory.length, 1);
  });

  it("should adjust balance when a record is sold", function() {
    store.addRecord(record);
    store.addRecord(record2);
    store.sellRecord(record);
    assert.strictEqual(store.balance, 1010);
  });

  it("should be able to print financial details", function() {
    store.addRecord(record);
    store.addRecord(record2);
    assert.strictEqual(store.printFinances(), "Balance: 1000. Inventory Value: 110.");
  });

  it("should be able to view all records of a given genre", function() {
    store.addRecord(record);
    store.addRecord(record2);
    assert.strictEqual(store.printRecordsOfGenre("Hardcore"), "Artist: Converge. Title: Jane Doe.")
  });

});
