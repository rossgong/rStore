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

-- Create Mock Data
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Banana", "Produce", 0.89, 550),
("Apple", "Produce", 1.29, 220),
("Bubble Gum", "Candy", 0.99, 456),
("Chicken Breasts", "Deli", 7.89, 10),
("Sliced Ham", "Deli", 7.50, 51),
("Broccoli", "Frozen", 3.29, 26),
("Peach Rings", "Candy", 2.79, 12),
("Vanilla Ice Cream", "Frozen", 7.89, 3),
("Red Grapes", "Produce", 2.79, 11),
("Pastrami", "Deli", 3.38, 8);

-- SELECT * FROM products;
