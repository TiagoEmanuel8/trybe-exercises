-- Mostrando todas as colunas das tabelas do exercício

SELECT * FROM PecasFornecedores.Fornecedores;
SELECT * FROM PecasFornecedores.Fornecimentos;
SELECT * FROM PecasFornecedores.Pecas;
SELECT * FROM PecasFornecedores.Vendas;

-- Exercicio 1 => Escreva uma query para exibir todas as peças que começam com GR .
SELECT * FROM PecasFornecedores.Pecas WHERE `name` LIKE 'Gr%';
-- Exercicio 2 => Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY fornecedor;
-- Exercicio 3 => Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos WHERE `Fornecedor` LIKE '_N_';
-- Exercicio 4 => Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
SELECT `name` FROM PecasFornecedores.Fornecedores WHERE `name` LIKE '%LTDA' ORDER BY `name` DESC;
-- Exercicio 5 => Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT COUNT(code) FROM PecasFornecedores.Fornecedores WHERE `code` LIKE '%F%';
-- Exercicio 6 => Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
SELECT * FROM PecasFornecedores.Fornecimentos WHERE `Preco` BETWEEN 15 AND 40 ORDER BY `Preco`;
-- Exercicio 7 => Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .
SELECT COUNT(*) FROM PecasFornecedores.Vendas WHERE order_date BETWEEN '2018-04-15 00:00:00' AND '2019-07-30 23:59:59';
SELECT COUNT(*) FROM PecasFornecedores.Vendas WHERE DATE(order_date) BETWEEN '2018-04-15 00:00:00' AND '2019-07-30 23:59:59'; -- Solução mais explícita