var Customer = function(cash) {
  this.cash = cash;
  this.collection = [];
}

Customer.prototype = {

  buyRecord: function(store, record) {
    recordToBuy = store.inventory.filter(function(item) {
      item === record;
    });
    if (this.cash < record.price) return;
      store.sellRecord(record);
      this.collection.push(record);
      this.cash -= record.price;
  }

}

module.exports = Customer;
