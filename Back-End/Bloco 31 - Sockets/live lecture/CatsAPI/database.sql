DROP DATABASE IF EXISTS cats_api;

CREATE DATABASE IF NOT EXISTS cats_api;

USE cats_api;

CREATE TABLE cats (
    id INT unsigned NOT NULL auto_increment,
    name VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    CONSTRAINT pk_cats PRIMARY KEY (id)
);

SELECT * FROM cats;