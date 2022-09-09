import json
import csv

with open("video_games.json") as file:
    video_games = json.load(file)
    # print(type(video_games))

# gêneros
game_genres = set()
for game in video_games:
    for genre in game["Metadata"]["Genres"].split(","):
        game_genres.add(genre)

# print(game_genres)

# consoles

consoles = set()
for game in video_games:
    consoles.add(game["Release"]["Console"])

# print(consoles)


# média de notas por gênero
scores_by_genre = {genre: [] for genre in game_genres}
# print(type(genre))
for game in video_games:
    # print(game)
    for genre in game["Metadata"]["Genres"].split(","):
        scores_by_genre[genre].append(game["Metrics"]["Review Score"])
    # print(scores_by_genre.items())

mean_review_score_by_genre = {}
for genre, scores in scores_by_genre.items():
    mean_review_score_by_genre[genre] = round(sum(scores) / len(scores), 2)


# print(mean_review_score_by_genre)


# os console que mais games venderam
sales_by_console = {console: 0.0 for console in consoles}
# print(sales_by_console)
for game in video_games:
    console = game["Release"]["Console"]
    sales = game["Metrics"]["Sales"]
    sales_by_console[console] += sales
# print(sales_by_console)

with open("reviews_by_genre.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(["genre", "mean"])
    for genre, mean in mean_review_score_by_genre.items():
        writer.writerow([genre, mean])

with open("reviews_by_genre.json", "w") as file:
    json.dump(mean_review_score_by_genre, file)


with open("sales_by_console.json", "w") as file:
    json.dump(sales_by_console, file)


# print(sales_by_console)
# print(scores_by_genre.items())
# print(mean_review_score_by_genre)
# print(scores_by_genre["Simulation"])

# print(consoles)
# print(f"Gêneros({len(game_genres)}): {game_genres}")
# print(video_games[2]["Metadata"]["Genres"].split(","))
# print(len(video_games))

import json

try:
    with open("video_games3.json") as file:
        video_games = json.load(file)
except json.decoder.JSONDecodeError:
    print("arquivo com formato incorreto")
except FileNotFoundError:
    print("arquivo inexistente")
