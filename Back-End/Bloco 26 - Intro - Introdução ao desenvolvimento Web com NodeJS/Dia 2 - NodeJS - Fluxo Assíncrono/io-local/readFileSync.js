const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}


// Se tratando de função sincrona = fs.readFileSync
// fs.readFileSync =>  responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.
// Parametros => fs.readFileSync(nome_arquivo, encoding de leitura)
// Só tenho erro se não tiver o arquivo.txt
