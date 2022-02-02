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
