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

#--------------exemplos course --------------------

# trabalhando com listas (arrays)
fruits = ["orange", "apple", "grape", "pineapple"]
print(fruits[0]) # acessa o primeiro item
print(fruits[-1]) # acessa o ultimo item
fruits.append("banana") # adicionando um item
print(fruits)
fruits.remove("pineapple") # removendo um item
print(fruits)
fruits.extend(["pear", "melon", "kiwi"]) # acrescenta uma lista de frutas a lista original
print(fruits)

fruits = ["orange", "apple", "grape", "pineapple"] # retorna o índice onde a fruta está localizada, neste caso 1
encontra_indice = fruits.index("apple")
print(encontra_indice)
ordena_frutas = fruits.sort()  # ordena a lista de frutas
print(ordena_frutas)

# Tuplas - são iguais as listas, mas são imutáveis
user = ("Cássio", "Botaro", 42)  # elementos são definidos separados por vírgula, envolvidos por parenteses
print(user)
user[0]  # acesso também por índices
print(user[0])

# Set(conjuntos) - Vai simular operação com conjuntos em matemática

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# Dict - Semelhante ao objeto de JS
people_by_id = {
    1: "Cássio",
    2: "João",
    3: "Felipe"
}
print(people_by_id)

# outro exemplo, dessa vez usando strings como chaves (ao contrário de JS, as aspas duplas são obrigatórias)
people_by_name = {
    "Cássio": 1,
    "João": 2,
    "Felipe": 3
}
print(people_by_name)

# elementos são acessados por suas chaves
print(people_by_id[1])  # saída: Cássio

# elementos podem ser removidos com a palavra chave del
people_by_id = {
    1: "Cássio",
    2: "João",
    3: "Felipe"
}
del people_by_id[1]
print(people_by_id)

# dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
formata = people_by_id.items()
print(formata)

# range - faz um laço for
# contagem crescente
print(list(range(5)))
# contagem definindo o 1º e o último número
print(list(range(1, 6)))
# contagem de 2 em 2
list(range(1, 11, 2))
# contagem decrescente
list(range(10, 0, -1))
