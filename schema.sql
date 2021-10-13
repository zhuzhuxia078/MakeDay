-- to enter mysql
   mysql -u root

-- schema

DROP DATABASE IF EXISTS makeDay;

CREATE DATABASE makeDay;

CREATE TABLE my_box (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  box_name VARCHAR NOT NULL,
  date DATE NOT NULL,
  cost DECIMAL(6,2) NOT NULL,
);