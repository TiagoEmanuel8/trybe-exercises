const axios = require("axios");
const URL = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

const getJoke = async () => {
  const dataJoke = (await axios.get(URL)).data.joke;
  // console.log(dataJoke);
  return dataJoke;
};

module.exports = {
  getJoke
};
