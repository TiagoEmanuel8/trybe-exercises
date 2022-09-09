# classe - circulo
# atributos - pi, raio
# comportamentos - calcular area (PI * raio * raio), perimetro (2 * PI * raio)

class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self, raio):
        PI = 3.14159
        return PI * raio * raio

    def calcular_perimetro(self, raio):
        PI = 3.14159
        return 2 * PI * raio


circulo1 = Circulo(2)
print(circulo1.calcular_area(6))
print(circulo1.calcular_perimetro(5))

class Square:
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self, lado):
        return lado * lado

    def calcular_perimetro(self, lado):
        return 4 * lado


quadrado1 = Square(1)


print(quadrado1.calcular_area(5))
print(quadrado1.calcular_perimetro(5))

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
