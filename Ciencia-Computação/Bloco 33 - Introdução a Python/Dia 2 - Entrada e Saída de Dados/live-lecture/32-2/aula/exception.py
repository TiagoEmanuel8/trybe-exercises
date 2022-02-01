import json

try:
    with open("video_games3.json") as file:
        video_games = json.load(file)
except json.decoder.JSONDecodeError:
    print("arquivo com formato incorreto")
except FileNotFoundError:
    print("arquivo inexistente")
