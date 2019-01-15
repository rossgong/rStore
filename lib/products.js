//This file provides abstraction of the databse functions

var Database = require("./db");

db = new Database();

module.exports = {

    getProduct: function (id, callback) {
        db.getProducts("item_id="+id, callback);
    },

    getAllProducts: function (callback) {
        db.getProducts(null, callback);
    },

    updateStock: function (id, newStock) {
        db.updateStock(id, newStock);
    },

    close: function() {
        db.close();
    }
}