//This file provides abstraction of the databse functions

var Database = require("./db");

db = new Database();

module.exports = {

    getProduct: function (id) {
        db.getProducts("item_id="+id, console.log);
    },

    getAllProducts: function (callback) {
        db.getProducts(null, callback);
    },

    close: function() {
        db.close();
    }
}