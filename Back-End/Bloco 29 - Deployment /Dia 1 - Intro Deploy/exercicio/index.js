require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send(process.env.MESSAGE));

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
