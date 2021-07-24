const crypto = require('crypto');
const fetch = require('node-fetch');
// const { btcPrice, generateToken } = require('../services');
const { posts } = require('../models/posts');

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
}

const post = (req, res) => {
  const idParams = parseInt(req.params.id);
  const idSearch = posts.find(({ id }) => id === idParams);
  res.status(200).json({ idSearch });
}

module.exports = { test, userLogin, apiBtc, allPosts, post };
