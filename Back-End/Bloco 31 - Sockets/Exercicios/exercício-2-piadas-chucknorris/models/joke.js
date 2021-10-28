const axios = require("axios");
const URL = "https://api.chucknorris.io/jokes/random";

const getJoke = async () => {
  const dataJoke = (await axios.get(URL)).data.value;
  // console.log(dataJoke);
  return dataJoke;
};

module.exports = {
  getJoke
};
