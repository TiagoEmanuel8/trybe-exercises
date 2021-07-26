const crypto = require('crypto');
const fetch = require('node-fetch');
// const { btcPrice, generateToken } = require('../services');
const { posts } = require('../models/posts');
const { recipes } = require('../models/recipes');

const test = (_req, res) => {
  res.status(200).send('deu tudo certo, pelo menos por enquanto, hahahaha');
}

const userLogin = (_req, res) => {
  const token = crypto.randomBytes(6).toString('hex').toUpperCase();
  res.status(200).json({ token });
};

const apiBtc = async (_req, res) => {
  const api = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
  const coin = await fetch(api).then((data) => data.json());
  res.status(200).json({coin});
};

const allPosts = (_req, res) => {
  res.status(200).json({ posts })
};

const post = (req, res) => {
  const idParams = parseInt(req.params.id);
  const idSearch = posts.find(({ id }) => id === idParams);
  res.status(200).json({ idSearch });
};

const operations = (req, res) => {
  const { operacao } = req.params;
  const numero1 = parseInt(req.params.numero1);
  const numero2 = parseInt(req.params.numero2);

  switch(operacao) {
    case 'soma':
      return res.status(200).json({ resultado: numero1 + numero2 });
    case 'subtracao':
      return res.status(200).json({ resultado: numero1 - numero2 });
    case 'multiplicacao':
      return res.status(200).json({ resultado: numero1 * numero2 });
    case 'divisao':
      return res.status(200).json({ resultado: numero1 / numero2 });
    default:
      return res.status(406).json({ message: "operação inválida" })
  };
};

const recipesQuery = (req, res) => {
  const idParams = req.params.id;
  const searchID = recipes.find(({ id }) => id === idParams);
  const remainingID = recipes.find(({ id }) => id !== idParams);

  res.status(200).json({
    receitaDeletada: searchID,
    receitaRestante: remainingID
  });
}

module.exports = { test, userLogin, apiBtc, allPosts, post, operations, recipesQuery };
