import json
import csv

with open("video_games.json") as file:
    video_games = json.load(file)
    print(type(video_games))