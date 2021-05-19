SELECT * FROM hr.employees;

-- 1 
SELECT MAX(SALARY) AS Maior_salário FROM hr.employees;
-- 2
SELECT MAX(SALARY) AS Maior_salário, MIN(SALARY) AS Menor_salário FROM hr.employees;
SELECT MAX(SALARY) - MIN(SALARY) AS Menor_salário FROM hr.employees;
-- 3
SELECT JOB_ID, AVG(SALARY) AS media_salario FROM hr.employees GROUP BY JOB_ID ORDER BY media_salario DESC;
-- 4
SELECT SUM(SALARY) AS dinheiro FROM hr.employees;
-- 5
SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2) FROM hr.employees;
-- 6
SELECT COUNT(*) FROM hr.employees WHERE JOB_ID = "IT_PROG";
-- 7
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;
-- 8 Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = "IT_PROG";
-- 9
SELECT JOB_ID, AVG(SALARY) AS media_salario FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID <> "IT_PROG" ORDER BY media_salario DESC;
-- 10  Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT department_id, AVG(SALARY) AS 'media_salarios', COUNT(*) AS numero_funcionarios FROM hr.employees GROUP BY department_id HAVING numero_funcionarios > 10;
-- 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees SET phone_number = REPLACE(phone_number, '515', '777');

