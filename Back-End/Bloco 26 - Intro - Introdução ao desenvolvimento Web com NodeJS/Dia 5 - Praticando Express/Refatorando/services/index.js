const fetch = require('node-fetch');

const btcPrice = async () => {
  const api = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
  const coin = await fetch(api).then((data) => data.json());
  // return coin;
}


module.exports = { btcPrice };