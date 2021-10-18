CREATE DATABASE IF NOT EXISTS products_api;

USE products_api;

CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

SELECT * FROM categories;

INSERT INTO categories (name) VALUES ('Eletrodoméstico'), ('Móvel'), ('Informática'), ('Celular');