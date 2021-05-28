-- Desafios sobre VIEW

-- 1
SELECT * FROM sakila.category;
SELECT * FROM sakila.film_category;
SELECT * FROM sakila.film;

CREATE VIEW film_with_categories AS 
SELECT 
    f.title, fc.category_id, c.name
FROM
    sakila.film AS f
        INNER JOIN
    sakila.film_category AS fc ON fc.film_id = f.film_id
		INNER JOIN
	sakila.category AS c ON c.category_id = fc.category_id
ORDER BY f.title ASC;

SELECT * FROM film_with_categories;

-- 2
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

CREATE VIEW film_info AS
SELECT 
    fa.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS `name`,
    f.title
FROM
    sakila.actor AS a
        INNER JOIN
    sakila.film_actor AS fa ON fa.actor_id = a.actor_id
        INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id
ORDER BY `name`;

SELECT * FROM film_info;

-- 3

SELECT * FROM sakila.address;
SELECT * FROM sakila.city;

CREATE VIEW address_info as
SELECT a.address_id, a.address, a.district, c.city_id, c.city AS city
FROM sakila.address AS a
INNER JOIN sakila.city AS c
ON c.city_id = a.city_id
GROUP BY city ASC;

SELECT * FROM address_info;