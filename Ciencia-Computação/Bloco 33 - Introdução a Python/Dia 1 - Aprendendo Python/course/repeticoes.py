restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# imprime a lista de restaurantes, sem o B e D
# jeito mais hard
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)

# jeito python de retornar restaurantes com nota maior q 3
# equivalente ao map e filter do Js
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]
min_rating = 3.0
filtered_restaurants = [
    xableu["name"]
    for xableu in restaurants
    if xableu["nota"] > min_rating
]
print(filtered_restaurants)

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
