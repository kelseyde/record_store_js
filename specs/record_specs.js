var assert = require("assert");
var Record = require("../record");

describe("Record", function() {
  var record;

  beforeEach(function() {
    record = new Record("Converge", "Jane Doe", "Hardcore", 10);
  });

  it("should have an artist", function() {
    assert.strictEqual(record.artist, "Converge");
  })

  it("should have a title", function() {
    assert.strictEqual(record.title, "Jane Doe");
  })

  it("should have a genre", function() {
    assert.strictEqual(record.genre, "Hardcore");
  })

  it("should have a price", function() {
    assert.strictEqual(record.price, 10);
  });

  it("should be able to print its properties as a string", function() {
    assert.strictEqual(record.print(), "Artist: Converge, Title: Jane Doe, Genre: Hardcore, Price: 10");
  })

})
