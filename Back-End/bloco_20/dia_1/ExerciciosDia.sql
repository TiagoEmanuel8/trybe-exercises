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
-- 7 Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;
-- 8 Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = "IT_PROG";
-- 9 Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, AVG(SALARY) AS media_salario FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID <> "IT_PROG" ORDER BY media_salario DESC;
-- 10  Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT department_id, AVG(SALARY) AS 'media_salarios', COUNT(*) AS numero_funcionarios FROM hr.employees GROUP BY department_id HAVING numero_funcionarios > 10;
-- 11 Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees SET phone_number = REPLACE(phone_number, '515', '777') WHERE phone_number LIKE '%515';
SELECT phone_number FROM hr.employees ORDER BY phone_number ASC;
-- 12 Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees;
SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;
-- 13 Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name, YEAR(hire_date) AS ano_admissão FROM hr.employees;
-- 14 
SELECT employee_id, first_name, DAY(hire_date) AS ano_admissão FROM hr.employees;
-- 15
SELECT employee_id, first_name, MONTH(hire_date) AS ano_admissão FROM hr.employees;
-- 16
SELECT UPPER(first_name)FROM hr.employees;
-- 17 Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT LAST_NAME _NAME, HIRE_DATE FROM hr.employees WHERE DATE(HIRE_DATE) BETWEEN '1987-07-01'  AND '1987-07-31';
