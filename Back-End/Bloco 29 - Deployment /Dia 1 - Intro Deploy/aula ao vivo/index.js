const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send(`<h2>Eu sou um servidor rodando na porta ${PORT} e eu estava ...</h2><img style="width: 300px; heigth: 300px" alt="cat" src="https://i.ytimg.com/vi/X5HwG7nIYG4/maxresdefault.jpg" />`)
});

app.listen(PORT, () => console.log('O server ta on'));