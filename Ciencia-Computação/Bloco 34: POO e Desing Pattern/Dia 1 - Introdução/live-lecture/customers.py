# representa o cliente
class Customer:  # cria a classe
    def __init__(self, name, email):  # constructor
        self.name = name
        self.email = email
        self._pin = "123"

    def setPassword(self, new_pin):
        pass

    def verifyPassword(self, pin):
        pass

    def show(self):
        print(f"Cliente: {self.name} E-mail: {self.email}")
