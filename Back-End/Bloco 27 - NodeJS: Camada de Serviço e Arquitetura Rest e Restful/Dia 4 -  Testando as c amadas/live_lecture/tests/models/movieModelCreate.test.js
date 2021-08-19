const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const { getConnection } = require('../connectionMock');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  let connectionMock; // usado para poder chamar a conexão com o BD em vários describes

  before(async () => {
    connectionMock = await getConnection(); // função para simular o BD

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('model_example').collection('movies').deleteMany({});
    MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', async () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
