var mysql = require("mysql");

//Abstraction for table rows
function Product (name, department, price, stock, id) {
  if (id) {
    this.id = id;
  }
  
  this.name = name;
  this.department = department;
  this.price = price;
  this.stock = stock;

  //creates with correct col labels
  this.toSQL = function() {
      var row = {
        product_name: this.name,
        department_name: this.department,
        price: this.price,
        stock_quantity: this.stock
      };

      if (this.id) row.item_id = this.id;

      return row;

  };
}

Product.prototype.toString = function() {
  return [this.id, this.name, this.department, this.price, this.stock].join(" | ");
}

function makeProductFromRow(row) {
  return new Product(row.product_name, row.department_name, row.price, row.stock_quantity, row.item_id);
}

var sqlDB = function () {
    this.details = {
        host: "localhost",
        port: 3306,

        user: "root",
        password: "root",
        database: "store"
    };

    this.connection = mysql.createConnection(this.details);    

    this.connection.connect(function(err) {
      if (err) throw err;

      //console.log(this);
    });

    this.getProducts = function(filter, callback) {
      //Default select all
      var queryString = "SELECT * FROM products";

      //If a filter String is provided use it
      if (filter) {
        queryString = mysql.format("SELECT * FROM products WHERE " + filter);
      }

      console.log(queryString);

      this.connection.query(queryString, function (err, results) {
          if (err) throw err;

          var products = [];
          results.forEach(product => {
            products.push(makeProductFromRow(product));
          });

          callback(products);
        }
      )
    };

    this.addProduct = function(product) {
      this.connection.query(
        "INSERT INTO products SET ?",
        product,
        function (err) {
          if (err) throw err;
        }
      )
    };

    this.updateStock = function(productID, newStock) {
      this.connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: newStock
          }, {
            item_id: productID
          }
        ],
        function (err) {
          if (err) throw err;
        }
      )
    };

    this.close = function() {
      this.connection.end();
    }
};

module.exports = sqlDB;
