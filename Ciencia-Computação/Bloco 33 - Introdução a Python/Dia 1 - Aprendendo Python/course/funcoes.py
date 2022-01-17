# calcula IMC


def imc(peso, altura):
    return peso / (altura / 100) ** 2


print(imc(90, 200))  # forma semelhante ao JS

print(imc(peso=90, altura=200)) # forma extra do python
