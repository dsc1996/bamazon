DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    primary key(item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product1", "department1", 2.99, 123);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product2", "department1", 1.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product3", "department2", 2.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product4", "department4", 5.99, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product5", "department7", 9.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product6", "department1", 5.99, 1290);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product7", "department7", 6.99, 923);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product8", "department3", 2.99, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product9", "department9", 1.99, 87);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product10", "department2", 8.99, 33);



