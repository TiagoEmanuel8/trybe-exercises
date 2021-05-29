-- 1
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;

SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

-- 2
SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

SELECT first_name FROM customer WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM actor WHERE first_name LIKE '%je%';

-- 3
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.customer;

(SELECT first_name from sakila.actor ORDER BY first_name DESC LIMIT 5)
UNION
(SELECT first_name from sakila.staff ORDER BY first_name ASC LIMIT 1)
UNION
(SELECT first_name from sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;
