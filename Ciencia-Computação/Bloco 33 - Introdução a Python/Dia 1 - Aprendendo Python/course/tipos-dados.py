# Tipos de dados em Python

# tipo inteiro
int = 5
print(type(int))

# tipo float
float = 5.0
print(type(float))

# tipo complex
complex = 3 + 4j
print(type(complex))

# tipo string
string = "olá"
print(type(string))

# tipo boleano
boleano = True
print(type(boleano))

boleano = False
print(type(boleano))

# arrays (js) = listas (python)
great_chess_players = ["Magnus", "Fabiano"]
print(great_chess_players)

# Acessando o primeiro item do array
print(great_chess_players[0])

# Adicionando um item ao array
great_chess_players = ["Magnus", "Fabiano"]
great_chess_players.append("Alberto")
print(great_chess_players)

# Removendo um item do array
great_chess_players = ["Magnus", "Fabiano", "Alberto"]
great_chess_players.remove("Alberto")
print(great_chess_players)

# Trabalhando com extensão de classes
great_chess_players = ["Magnus", "Fabiano"]
more_chess_players = ["Alireza", "Anand"]
great_chess_players.extend(more_chess_players)
print(great_chess_players)

# tupla - Armazenar variavel tipo um BD
world_champion = ("Magnus", 1)
print(world_champion)
print(world_champion[0])
print(world_champion[1])


great_chess_players_ranking = ["Magnus", "Fabiano"]
world_champion = ("Magnus", 1)  # criando a tupla
great_chess_players_ranking = [world_champion]  # associo tupla a lista
print(great_chess_players_ranking)
great_chess_players_ranking.append(("Fabiano", 2))  # adicionando uma tupla
print(great_chess_players_ranking)
great_chess_players = ["Magnus", "Fabiano", "Hikaru", "Anand"]
great_chess_players_ranking.extend(
    [(great_chess_players[2], 18), (great_chess_players[3], 15)]
)  # adicionando a tupla a varios campos do array
print(great_chess_players_ranking)


# dicionario - parece o objeto do js
jogador = {"nome": "Alberto", "cidade": "BH"}
print(jogador["nome"])

# conjuntos - igual a matemática
admin_user = {"Alberto", "Gabi"}
data_squad = {"Nakano", "Gabi", "Luca"}
print(
    admin_user.intersection(data_squad)
)  # intersecção de conjuntos, só trás o que é comun

all_users = {"Alberto", "Gabi", "Luca", "Bora", "Nakano"}
print(all_users.difference(admin_user))  # trás o que é diferente dos conjunto

admin_user = admin_user.union(all_users)  # união entre conjuntos
print(admin_user)

# e qual a diferença entre lista, tupla e dicionario

# lista - armazena diferentes informações de várias entidades
# tupla - armazena diferentes informações mas de uma entidade
# dicionário - Usa como um objeto de Js, aceita uma tupla como chave, mas nao aceita uma lista
# conjunto - igual ao conjunto da regra de conjunto
