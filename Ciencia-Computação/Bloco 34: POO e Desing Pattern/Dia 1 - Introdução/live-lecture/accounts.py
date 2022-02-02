class Account:
    def __init__(self, customers, number, balance=0):
        self._balance = 0
        self._customers = customers
        self._number = number
        self._transactions = []
        self.deposit(balance)

    def status(self):
        print(f"Número da conta: {self._number} Saldo: {self._balance:10.2f}")

    def withdraw(self, amount):
        if self._balance >= amount:
            self._balance -= amount
            self._transactions.append(["SAQUE", amount])

    def deposit(self, amount):
        self._balance += amount
        self._transactions.append(["DEPÓSITO", amount])

    def details(self):
        print(f"Extrado da conta número: {self._number}\n")
        for transaction in self._transactions:
            print(f"{transaction[0]:10s} {transaction[1]:10.2f}")
        print(f"\n     Saldo: {self._balance:10.2f}\n")


# --------------------------
# chamando essa classe
# python3 -i accounts.py
# from customers import Customer
# cliente1 = Customer('Isac', 'isac@betrybe.com') - chama o cliente cadastrado
# conta_1 = Acoount([cliente1], '010123-5', 100) - cria a conta
# conta_1.status() - mostra a conta
# conta_1.deposit(20) - deposita na conta
# conta_1.withdraw(20) - saca na conta
