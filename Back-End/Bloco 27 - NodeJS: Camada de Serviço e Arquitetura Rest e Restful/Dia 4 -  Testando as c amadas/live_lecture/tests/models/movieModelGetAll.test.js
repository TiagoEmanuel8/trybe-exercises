const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const MovieModel = require('../../models/movieModel');
const { getConnection } = require('../connectionMock');

describe('Busca todos os filmes no DB', () => {
  let connectionMock; // usado para poder chamar a conexão com o BD em vários describes
  
  // mockando uma conexão com o BD
  before(async () => {
    connectionMock = await getConnection();

    sinon.stub(MongoClient, 'connect')
      .resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });

  describe('quando não existe nenhum filme cadastrado', () => {
    // before(async () => {
    //   await connectionMock.db('model_example').collection('movies').deleteMany({});
    // });

    it('retorna um array', async () => {
      // Act
      const response = await MovieModel.getAll();

      // Assert
      expect(response).to.be.an('array');
    });

    it('o array é vazio', async () => {
      // Act
      const response = await MovieModel.getAll();

      // Assert
      // eslint-disable-next-line no-unused-expressions
      expect(response).to.be.empty;
    });
  });

  describe('quando existe pelo menos um filme cadastrado', () => {
    before(async () => {
      await connectionMock.db('model_example').collection('movies').insertOne({
        title: 'A volta dos que não foram',
        directedBy: 'Ricci',
        releaseYear: 2017,
      });
    });

    after(async () => {
      await connectionMock.db('model_example').collection('movies').deleteMany({});
    });

    // eslint-disable-next-line sonarjs/no-identical-functions
    it('retorna um array', async () => {
      const response = await MovieModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não é vazio', async () => {
      const response = await MovieModel.getAll();

      // eslint-disable-next-line no-unused-expressions
      expect(response).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [item] = await MovieModel.getAll();

      expect(item).to.be.an('object');
    });

    it('os objetos do array possuem as propriedades obrigatórias', async () => {
      const [item] = await MovieModel.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});
