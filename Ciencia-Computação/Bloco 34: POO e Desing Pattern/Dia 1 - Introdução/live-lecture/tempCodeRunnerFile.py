class Automovel:
    def _init_(self, rodas=2):
        self.rodas = rodas
     
    def is_carro(self):
        if self.rodas == 4:
            return True
        
        return False
      
    # @classmethod  
    # def instancia_moto(cls):
    #     return cls(rodas=2)

carro = Automovel(4)
print(carro.is_carro)