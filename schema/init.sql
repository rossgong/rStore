DROP DATABASE IF EXISTS store;
CREATE database store;

USE store;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30),
    price DECIMAL(11,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Banana", "Produce", 0.89, 550);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple", "Produce", 1.29, 220);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bubble Gum", "Candy", 0.99, 456);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken Breasts", "Deli", 7.89, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sliced Ham", "Deli", 7.50, 51);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Broccoli", "Frozen", 3.29, 26);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Peach Rings", "Candy", 2.79, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vanilla Ice Cream", "Frozen", 7.89, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Grapes", "Produce", 2.79, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pastrami", "Deli", 3.38, 8);

SELECT * FROM products;
