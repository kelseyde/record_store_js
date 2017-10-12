var assert = require("assert");
var Record = require("../record");
var Store = require("../store");
var Customer = require("../customer");

describe("Customer", function() {
  var customer;
  var store;
  var record;
  var record2;

  beforeEach(function() {
    customer = new Customer(100);
    store = new Store("Gets.Records", "Glasgow", 1000);
    record = new Record("Converge", "Jane Doe", "Hardcore", 10);
    record2 = new Record("Simon and Garfunkel", "Bridge Over Troubled Water", "Folk", 100);
  });

  it("should have cash", function() {
    assert.strictEqual(customer.cash, 100);
  });

  it("should start with no records", function() {
    assert.strictEqual(customer.collection.length, 0);
  });

  it("should be able to buy record", function() {
    customer.buyRecord(store, record);
    assert.strictEqual(customer.collection.length, 1);
    assert.strictEqual(customer.cash, 90);
  });

});
