var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

Store.prototype = {

  addRecord: function(record) {
    this.inventory.push(record);
  },

  sellRecord: function(record) {
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index, 1);
    this.balance += record.price;
  },

  printInventory: function() {
    var result = "";
    for (record of this.inventory) {
      var item = (record.artist + ": " + record.title + ". ");
      result = result.concat(item);
    }
    return result.trim();
  },

  printFinances: function() {
    var finances = "Balance: " + this.balance + ". ";

    var inventoryValue = 0;
    this.inventory.forEach(function(record) {
      inventoryValue += record.price;
    });
    finances = finances.concat("Inventory Value: " + inventoryValue + ".");
    return finances;
  },

  printRecordsOfGenre: function(genre) {
    foundRecords = this.inventory.filter(function(record) {
      return record.genre === genre;
    });
    var resultString = "";
    foundRecords.forEach(function(foundRecord) {
      resultString = resultString.concat("Artist: "+foundRecord.artist+". Title: "+foundRecord.title+". ");
    });

    return resultString.trim();
  },

}

module.exports = Store;
