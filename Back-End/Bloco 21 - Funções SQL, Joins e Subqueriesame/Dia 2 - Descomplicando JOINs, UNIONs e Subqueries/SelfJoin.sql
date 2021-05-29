-- 1 film_id, A.replacement_cost, B.film_id, B.replacement_cost
SELECT * FROM sakila.film;

SELECT f1. film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.replacement_cost = f2.replacement_cost;

-- 2 rental_duration
SELECT * FROM sakila.film;

SELECT f1.title, f2.title, f1.rental_duration, f2.rental_duration
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.rental_duration = f2.rental_duration
HAVING f1.rental_duration BETWEEN 2 AND 4;
