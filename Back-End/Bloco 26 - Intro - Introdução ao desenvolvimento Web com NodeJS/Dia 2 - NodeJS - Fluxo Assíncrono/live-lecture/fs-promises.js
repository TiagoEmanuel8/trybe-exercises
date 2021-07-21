const fs = require('fs').promises;

fs.readdir('./')
  .then((fileNames) => {
    return Promise.all(fileNames.map((fileName) => fs.readFile(fileName)));
  })
  .then((files) => {
    return files.reduce((total, file) => total + file.byteLength, 0);
  })
  .then((totalSize) => {
    console.log(`Tamanho total dos arquivos: ${totalSize}`);
  });

async function main() {
  const fileNames = await fs.readdir('./');

  const files = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName))
  );

  const totalSize = files.reduce((total, file) => total + file.byteLength, 0);

  console.log(`Tamanho total dos arquivos: ${totalSize}`);
}

async function secondMain() {
  const totalSize = await fs
    .readdir('./')
    .then((fileNames) => {
      return Promise.all(fileNames.map((fileName) => fs.readFile(fileName)));
    })
    .then((files) => {
      return files.reduce((total, file) => total + file.byteLength, 0);
    });

  console.log(`Tamanho total dos arquivos: ${totalSize}`);
}
