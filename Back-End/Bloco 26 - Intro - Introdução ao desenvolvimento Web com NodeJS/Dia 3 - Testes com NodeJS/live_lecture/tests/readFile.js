const fs = require('fs').promises;
const sinon = require('sinon'); // 3 - serve para um 'mock'
const { expect } = require('chai'); //1 - Agora posso usar o expect extraindo do chai
const { readFile } = require('../readFile');

const FILE_CONTENT = 'Turma 9 é top!'; //2 - 

describe('Função readFile', () => {
  describe('quando o arquivo é lido com sucesso', () => {
    // função para 'mockar', mas como não é jest é before e after
    before(() => { // na prática vai simular a leitura para rodar testes subsequentes
      sinon.stub(fs, 'readFile').resolves(FILE_CONTENT); //chamo o stub assim
    });

    after(() => { // na prática vai desfazer o mock, é obrigatório
      fs.readFile.restore();
    });

    describe('a resposta', () => {
      it('é uma string', async () => {
        const result = await readFile('./meuArquivo.txt');
        expect(result).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', async () => {
        const result = await readFile('./meuArquivo.txt');
        expect(result).to.be.equal(FILE_CONTENT);
      });
    });
  });

  describe('quando ocorre algum erro na leitura do arquivo', () => {
    before(() => {
      sinon.stub(fs, 'readFile').rejects(); // teste de erro
    });

    after(() => {
      fs.readFile.restore(); // tenho que restaurar
    });

    describe('a resposta', () => {
      it('é igual a "null"', async () => {
        const result = await readFile('./outroArquivo.txt');
        expect(result).to.be.equal(null);
      });
    });
  });
});
