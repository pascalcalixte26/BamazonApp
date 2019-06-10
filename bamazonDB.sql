CREATE DATABASE bamazonDB;


USE bamazonDB;


CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price FLOAT(12),
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jordan VII", "Athletic Wear", 199.50, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Engine Filter", "Auto", 24.99, 116);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bookbag", "School Accessories", 35.69, 87);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's Suite", "Men's business Wear", 385.90, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jeep Tire", "Auto", 135.45, 384);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Windshield Wiper", "Auto", 32.87, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NewEra Sweatshirt", "Athletic Wear", 23.25, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("12 Inch Dinner Plates", "Kitchenware", 90.00, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Laptop", "Electronics", 1299.99, 68);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPad Air", "Electronics", 349.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Butcher Knife", "Kitchenware", 82.79, 35);



