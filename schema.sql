-- to enter mysql
  -- mysql -u root

-- to execute this schema
  -- mysql < schema.sql
-- schema

DROP DATABASE IF EXISTS makeDay;

CREATE DATABASE makeDay;

USE makeDay;

CREATE TABLE my_box (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  box_name VARCHAR(50) NOT NULL,
  date date,
  amount decimal(10, 2) NOT NULL
);