def contadorNomes(nomes):
    maiorNome = nomes[0]
    for index in nomes:
        if len(index) > len(maiorNome):
            maiorNome = index
    return maiorNome


arrayNomes = contadorNomes(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
print(arrayNomes)
