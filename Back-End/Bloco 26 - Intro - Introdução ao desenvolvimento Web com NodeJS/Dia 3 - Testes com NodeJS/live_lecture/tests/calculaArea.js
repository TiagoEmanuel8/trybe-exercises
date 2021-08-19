const sinon = require('sinon');
const { expect } = require('chai');
const readline = require('readline-sync');
const { calculaArea } = require('../calculaArea');

describe('Função calculaArea', () => {
  before(() => {
    sinon.stub(readline, 'questionInt').returns(10);
  });

  after(() => {
    readline.questionInt.restore();
  });

  describe('a resposta', () => {
    it('é um "number"', () => {
      const resposta = calculaArea();
      expect(resposta).to.be.a('number');
    });

    it('é igual à área total', () => {
      const resposta = calculaArea();
      expect(resposta).to.be.equal(100);
    });
  });
});
