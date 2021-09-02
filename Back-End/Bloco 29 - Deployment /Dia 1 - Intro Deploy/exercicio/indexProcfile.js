require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/2', (_req, res) => res.send(process.env.MESSAGE2));

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
