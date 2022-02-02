class Bank:
    def __init__(self, name):
        self._name = name
        self._accounts = []

    def create_account(self, account):
        self._accounts.append(account)

    def show_accounts(self):
        for account in self._accounts:
            account.status()
