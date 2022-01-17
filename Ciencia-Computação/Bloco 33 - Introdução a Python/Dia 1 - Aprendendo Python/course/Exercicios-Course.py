# 1 - No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.

a = 10
b = 5
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a ** b)


# 2 -  Declare e inicialize uma variável: hours = 6 . Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

hours = 6
minutes = 60
seconds = 60

# minutos em 6h
print(hours * minutes)
# segundos em 6h
print(hours * minutes * seconds)

# 3 - Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.
print("Olá, Mundo!!!")

# 4 - Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

preco_inicial = 24.20 * 0.6 + 3
print(preco_inicial)
preco_secundario = 24.20 * 0.6 + 0.75
print(preco_secundario)
preco_final = preco_inicial + (preco_secundario * 59)
print(preco_final)

# 5 Adicione o elemento "Ciência da Computação" à lista.
trybe_course = ["Introdução", "Front-end", "Back-end"]
print(trybe_course)
trybe_course.append("Ciência da Computação")
print(trybe_course)

# 6 Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course[0] = "Fundamentos"
print(trybe_course)

# 7 Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

var = set()
var.add("Tiago Emanuel")
print(var)

# 8 O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?

# 9 Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.

# 10 Remova a propriedade cuja chave é "origem" e imprima o objeto no console.

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# print(object.key(info))

info["recorrente"] = "sim"
print(info)

# 11 Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.

# Resposta = list (para alterar dados) ou tuple (para apenas exibir)

# 12 Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

# Resposta = dict
