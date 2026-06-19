CREATE DATABASE ecommerce;

USE ecommerce;


CREATE TABLE users(

id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100) UNIQUE,
password VARCHAR(255)

);



CREATE TABLE products(

id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
price INT,
image VARCHAR(255)

);



CREATE TABLE cart(

id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
product_id INT

);



INSERT INTO products(name,price,image)

VALUES

('Laptop',50000,'laptop.jpg'),

('Mobile',20000,'mobile.jpg'),

('Headphone',3000,'headphone.jpg');
