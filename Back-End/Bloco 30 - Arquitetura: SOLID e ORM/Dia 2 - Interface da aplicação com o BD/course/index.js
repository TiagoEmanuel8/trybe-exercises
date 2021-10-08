// 5 - de fato chamo o sequelize aqui
const express = require('express');
const { Store } = require('./src/models'); // 5.1 - importo o Store da sequelize
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  Store.findAll() // 5.2 - método próprio do sequelize para retornar tudão do BD
    .then(dados => { res.status(200).json(dados)})
    .catch((e) => { console.log(e.message);
      res.status(500).json({ message: "Algo deu errado!!!" })
    });
})

const PORT = 3000;

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`));
