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
