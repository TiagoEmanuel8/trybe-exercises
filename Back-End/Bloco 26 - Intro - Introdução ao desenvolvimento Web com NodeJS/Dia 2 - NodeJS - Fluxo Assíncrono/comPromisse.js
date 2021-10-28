// O objetivo é fazer uma função também é dividir - de forma ASÍNCRONA

// Essa diferença é a promise + return da promisse

function dividirNumeros(n1, n2) {
  const promise = new Promise((resolve, reject) => {
    if (n2 == 0) reject(Error("Não pode ser feito uma divisão por zero"));
    const resultado = n1 / n2;
    resolve(resultado)
  });
  return promise;
}

// tratamento da promisse
dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

  // 1 Construindo a promisse com a sintaxe
  const p = new Promise((resolve, reject) => {
    // Aqui é onde vamos realizar a lógica que precisamos
    // para "tentar cumprir" a promessa
  });

  // 2 implementando a lógica do resolve, reject
const fs = require('fs');
function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

  // 3 Tratamento de acerto e erro
  readFilePromise('../file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    // console.error(err); // Escrevo o erro no console
    // console.error(`Erro ao ler arquivo: ${err.message}`);
  });