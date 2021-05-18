-- Exibindo os dados das tabelas

SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;

-- Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :

INSERT INTO Pixar.Movies (title, director, `year`, length_minutes) VALUES ('Monstros SA', 'Pete Docter', 2001, 92);
SELECT * FROM Pixar.Movies ORDER BY id DESC;

INSERT INTO Pixar.Movies (title, director, `year`, length_minutes) VALUES ('Nemo', 'John Lasseter', 2003, 107);
UPDATE Pixar.Movies SET title = 'Procurando Nemo' WHERE id = 9; -- Escrevi o nome incompleto do filme, rsrsrs
SELECT * FROM Pixar.Movies ORDER BY id DESC;

INSERT INTO Pixar.Movies (title, director, `year`, length_minutes) VALUES ('Os Incríveis', 'Brad Bird', 2004, 116);
SELECT * FROM Pixar.Movies ORDER BY id DESC;

INSERT INTO Pixar.Movies (title, director, `year`, length_minutes) VALUES ('WALL-E', 'Pete Docter', 2008, 104);
SELECT * FROM Pixar.Movies ORDER BY id DESC;
 -- Poderia fazer colocar de uma vez os valores, mas preferi fazer individualmente para treinar os comandos
 
-- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES (8, 6.8, 450000000, 370000000);
SELECT * FROM Pixar.BoxOffice ORDER BY movie_id DESC;

-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE.

UPDATE Pixar.Movies SET director = 'Andrew Staton' WHERE id = 9;
SELECT * FROM Pixar.Movies ORDER BY id DESC;

-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
UPDATE Pixar.Movies SET title = 'Ratatouille' WHERE id = 3;
SELECT * FROM Pixar.Movies ORDER BY id ASC;

-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies :

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES
(9, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);

SELECT * FROM Pixar.BoxOffice ORDER BY movie_id DESC;

-- Diferentemente do exercicio 1, nesse exercicio eu optei por inserir os valores de uma única vez

-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".
-- Nota: Nesse exercicio as tabelas movies e boxoffice tem relação, através dos campos id, (id de movies é fk de boxoffice) -> Passos a serem seguidos

DELETE FROM Pixar.BoxOffice WHERE movie_id = 11; -- 1) Deleto os dados primitivos, nesse caso é o id

DELETE FROM Pixar.Movies WHERE id = 11; -- 2) Na tabela fk, deleto a linha que compartilha os mesmos dados
-- Obs: Estou deletando usando o ID pois não desativei a safe update

DELETE FROM Movies WHERE title = 'WALL-E'; -- O exercicio pede assim, mas por segurança não desativei a safe update

-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

SELECT * FROM Movies WHERE director = 'Andrew Staton'; -- Necessário saber quais os filmes dele
DELETE FROM Pixar.BoxOffice WHERE movie_id IN (2, 9); -- Deletar os id na tabela principal
DELETE FROM Pixar.Movies WHERE id IN (2, 9); -- Deletando com a segurança do safe update
