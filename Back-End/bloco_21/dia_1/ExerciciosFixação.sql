-- MANIPULAÇÃO DE STRINGS

-- 1) Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');
-- 2) Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'do DuckDuckGo', 'em Google');
-- 3) Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
SELECT LENGTH('Uma frase qualquer');
-- 4) Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- 5) Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- CONDICIONAIS

-- 1)
SELECT * FROM sakila.film;
SELECT film_id, title,
    IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'Condicional'
FROM sakila.film;

-- 2)
SELECT * FROM sakila.film;
USE sakila;
SELECT title, rating,
	CASE 
		WHEN rating = 'G' THEN 'Livre para todos'
		WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE rating = 'Proibido para menores de idade'
END AS 'censura'
FROM film;

-- OPERAÇÕES MATEMÁTICAS

-- 1)
SELECT IF(15 MOD 2 = 0, 'par', 'impar') AS 'Pas ou Ímpar';

-- 2)
SELECT 220 DIV 12;

-- 3)
SELECT 220 MOD 12;

-- 4)
SELECT ROUND(15 + (RAND() * 5), 2);

-- 5) 
SELECT ROUND(15.75, 5);

-- 6)
SELECT FLOOR(39.494);

-- 7)
SELECT CEIL(85.234);

-- DATA

-- 1)
SELECT DATEDIFF('2030-01-20', CURRENT_DATE()) AS `Diferença Data`;

-- 2)
SELECT TIMEDIFF('11:00:00', '10:25:45') AS `Diferença Hora`;

-- FUNÇÕES DE AGREGAÇÃO

SELECT * FROM sakila.film;
-- 1
SELECT 
	AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;

-- GROUP BY E HAVING
SELECT * FROM sakila.customer;

-- 1
USE sakila;
SELECT active, COUNT(*) FROM customer GROUP BY `active`;

-- 2
USE sakila;
SELECT 
    store_id, active, COUNT(*)
FROM
    customer
GROUP BY `store_id`,`active`;

-- 3
SELECT * FROM sakila.film;

USE sakila;
SELECT 
    rating, 
    AVG(rental_duration) AS `Media`
FROM
    film
GROUP BY `rating` ORDER BY Media DESC;

-- 4
SELECT * FROM sakila.address;

SELECT 
	district,
    COUNT(*) AS `Quantidade`
FROM sakila.address
GROUP BY district
ORDER BY Quantidade DESC;
