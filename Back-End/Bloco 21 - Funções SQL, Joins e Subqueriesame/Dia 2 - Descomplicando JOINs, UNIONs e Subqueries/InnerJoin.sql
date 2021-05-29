-- 1
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f ON a.actor_id = f.actor_id;

-- 2
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT first_name, last_name, address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a ON s.address_id = a.address_id;

-- 3
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a 
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- 4
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a 
ON c.address_id = a.address_id
WHERE
    a.district = 'California'
    AND c.first_name LIKE '%rene%';
    
-- 5
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, count(a.address) as `quantidade`
FROM sakila.customer AS c
INNER JOIN address a ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;

-- 6
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT s.first_name, s.last_name, AVG(p.amount) as `media`
FROM staff AS s
INNER JOIN payment AS p ON s.staff_id = p.staff_id
WHERE year(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;


