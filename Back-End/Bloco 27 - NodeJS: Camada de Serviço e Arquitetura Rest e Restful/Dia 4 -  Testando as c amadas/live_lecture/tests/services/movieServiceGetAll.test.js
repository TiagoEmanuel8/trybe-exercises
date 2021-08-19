const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = require('../../models/movieModel');
const MovieService = require('../../services/movieService');

describe('Busca todos os filmes no DB', () => {
  describe('quando não existe nenhum filme cadastrado', () => {
    // mockando a camada de services
    before(() => {
      sinon.stub(MovieModel, 'getAll')
        .resolves([]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      // Act
      const response = await MovieService.getAll();

      // Assert
      expect(response).to.be.an('array');
    });

    it('o array é vazio', async () => {
      // Act
      const response = await MovieService.getAll();

      // Assert
      // eslint-disable-next-line no-unused-expressions
      expect(response).to.be.empty;
    });
  });

  describe('quando existe pelo menos um filme cadastrado', () => {
    // mockando uma resposta do BD
    before(() => {
      sinon.stub(MovieModel, 'getAll')
        .resolves([
          {
            id: '60e4c705775145e456ae3bfc',
            title: 'A volta dos que não foram',
            directedBy: 'Ricci',
            releaseYear: 2017,
          },
        ]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    // eslint-disable-next-line sonarjs/no-identical-functions
    it('retorna um array', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não é vazio', async () => {
      const response = await MovieService.getAll();

      // eslint-disable-next-line no-unused-expressions
      expect(response).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [item] = await MovieService.getAll();

      expect(item).to.be.an('object');
    });

    it('os objetos do array possuem as propriedades obrigatórias', async () => {
      const [item] = await MovieService.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});
