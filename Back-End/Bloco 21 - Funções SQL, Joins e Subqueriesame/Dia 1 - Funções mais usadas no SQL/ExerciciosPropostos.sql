SELECT * FROM hr.employees;

-- 2
SELECT 
	MAX(SALARY) - MIN(SALARY)
FROM hr.employees;

-- 4
SELECT 
	SUM(SALARY) AS capital_pg
FROM hr.employees;

-- 6
SELECT 
    JOB_ID, COUNT(*) AS 'total'
FROM
    hr.employees
WHERE
    JOB_ID = 'IT_PROG';
    
-- 8
SELECT 
    JOB_ID, SUM(SALARY)
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 10
SELECT * FROM hr.employees;
SELECT
	DEPARTMENT_ID,
    AVG(SALARY) AS media,
    COUNT(JOB_ID) AS qtde_empregados
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
HAVING qtde_empregados > 10;

-- 12
SELECT 
    *
FROM
    hr.employees
WHERE
    LENGTH(first_name) >= 8;
    
-- 14
SELECT * FROM hr.employees;

SELECT 
    employee_id, first_name, DAY(hire_date) AS dia_cont
FROM
    hr.employees;
    
-- 16
SELECT * FROM hr.employees;

SELECT 
    UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME))
FROM
    hr.employees;

-- 18
SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE)
FROM hr.employees;

