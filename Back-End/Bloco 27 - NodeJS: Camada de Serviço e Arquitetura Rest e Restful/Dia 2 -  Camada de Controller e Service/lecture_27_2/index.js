const express = require('express')
const SongController = require('./controllers/songController')
const bodyParse = require('body-parser')

const app = express()
const PORT = 3000
app.use(bodyParse.json())

app.get('/songs', SongController.findAllSongs)
app.get('/songs/:id', SongController.findOneSong)
app.post('/songs', SongController.createSong)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
