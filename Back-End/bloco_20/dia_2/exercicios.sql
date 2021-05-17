-- // Exercicio 1: Exibir essa string
SELECT 'This is SQL Exercise, Practice and Solution'; 

-- // Exercicio 2: Exibir 3 números em 3 colunas
SELECT 1, 2, 3;

-- // Exercicio 3: Exibir a soma de 10 + 15
SELECT 10 + 15;

-- // Exercicio 4: Exibir o resultado de uma expressão aritmética qualquer
SELECT 10 * 5;

-- // Exercicio 5: Exercicio para exibir todas as informações dos cientistas
SELECT * FROM Scientists.Scientists;

-- //  Exercicio 6: Exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT Name AS `Nome do Projeto`, Hours AS `Tempo de Trabalho` FROM Scientists.Projects;

-- // Exercicio 7: Exibir o nome dos cientistas em ordem alfabética .
SELECT Name FROM Scientists.Projects ORDER BY Name;

-- // Exercicio 8: Exibir o nome dos Projetos em ordem alfabética descendente.
SELECT Name FROM Scientists.Projects ORDER BY Name Desc; 

-- // Exercício 9: Exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT CONCAT('O projeto ', Name , 'precisou de ', Hours , ' horas para ser concluído.') FROM Scientists.Projects;

-- // Exercicio 10: Exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
