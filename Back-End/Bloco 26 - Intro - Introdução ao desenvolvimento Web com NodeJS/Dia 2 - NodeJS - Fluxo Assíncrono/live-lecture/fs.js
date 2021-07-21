const fs = require('fs');
const util = require('util');

function getErrorMessage(err) {
  if (err.code === 'ENOENT') return 'Arquivo não existe';

  return err.message;
}

fs.readFile('meuarquivo.txt', (err, data) => {
  if (err) return console.error(`Erro ao ler arquivo: ${getErrorMessage(err)}`);

  console.log('Conteúdo do arquivo:', data.toString('utf8'));
});

function readdirPromise(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, files) => {
      if (err) return reject(err);
      resolve(files);
    });
  });
}

readdirPromise('./')
  .then((files) => {
    console.log(files);
  })
  .then(() => {
    console.log('Segundo then');
  })
  .catch((err) => {
    console.error(err);
  });

const readdirPromisified = util.promisify(fs.readdir);

readdirPromisified('./')
  .then((files) => {
    console.log(files);
  })
  .then(() => {
    console.log('Segundo then');
  })
  .catch((err) => {
    console.error(err);
  });

