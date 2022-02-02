# classe - retangulo
# atributos - base, altura
# comportamentos - calcular area (base * altura), perimetro (2 * (base + altura))

class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcula_area(self):
        return self.base * self.altura

    def calcular_perimetro(self, base, altura):
        return 2 * (base + altura)


retangulo1 = Retangulo(1, 2)
print(retangulo1.calcula_area())
print(retangulo1.calcular_perimetro(3, 4))
