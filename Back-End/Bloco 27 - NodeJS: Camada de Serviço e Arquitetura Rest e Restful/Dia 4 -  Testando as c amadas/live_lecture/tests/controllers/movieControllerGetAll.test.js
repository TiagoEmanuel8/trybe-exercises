const sinon = require('sinon');
const { expect } = require('chai');
const MovieController = require('../../controllers/movieController');
const MovieService = require('../../services/movieService');

describe('Obtem todos os filmes do DB', () => {
  describe('quando não existem filmes no banco de dados', () => {
    const request = {};
    const response = {};

    before(() => {
      sinon.stub(MovieService, 'getAll')
        .resolves([]);

      request.body = {};

      response.status = sinon.stub()
        .returns(response);

      response.json = sinon.stub()
        .returns(response);
    });

    after(() => {
      MovieService.getAll.restore();
    });

    it('retorna o status HTTP 200', async () => {
      await MovieController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um array em formato json', async () => {
      await MovieController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});
