CREATE DATABASE IF NOT EXISTS solid_example2;

USE solid_example2;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  role VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);