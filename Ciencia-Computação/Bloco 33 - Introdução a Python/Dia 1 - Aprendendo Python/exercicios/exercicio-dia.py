# 1 Crie uma função que receba dois números e retorne o maior deles.

def comparador(x, y):
    if(x > y):
        return x
    else:
        return y


funcaoComparador = comparador(5, 15)
print(funcaoComparador)


# 2 Calcule a média aritmética dos valores contidos em uma lista.

media = lambda x, y: (x + y)/2
print(media(7, 7))

# 3 Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n


def quadrado(n):
    for el in range(n):
        return print(n * '*')


quadrado(5)

# 4 Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .


def contadorNomes(nomes):
    maiorNome = nomes[0]
    for index in nomes:
        if len(index) > len(maiorNome):
            maiorNome = index
    return maiorNome


arrayNomes = contadorNomes(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
print(arrayNomes)
