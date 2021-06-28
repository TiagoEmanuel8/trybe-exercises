const fs = require('fs/promises');

const readSimpsons = () => {
  return fs.readFile('./simpsons.json', 'utf8')
    .then(payload => JSON.parse(payload));
};

const writeSimpsons = (newFile) => {
  return fs.writeFile('./simpsonsModified.json', JSON.stringify(newFile));
};

module.exports = {
  readSimpsons,
  writeSimpsons
};
