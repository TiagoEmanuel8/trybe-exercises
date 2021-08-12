const { expect } = require('chai');

const functionModule = require('../moduleNumber');

describe('Executa a função', () => {
  describe('Número maior que 0', () => {
    it('é uma string', () => {
      const resposta = functionModule(5);
      expect(resposta).to.be.a('string');
    });
    it('deve retornar "positivo" ', () => {
      const resposta = functionModule(5);
      expect(resposta).to.be.a.equals('positivo');
    });
  });

  describe('Número menor que 0', () => {
    it('é uma string', () => {
      const resposta = functionModule(-5);
      expect(resposta).to.be.a('string');
    });
    it('deve retornar "negativo"', () => {
      const resposta = functionModule(-5);
      expect(resposta).to.be.a.equals('negativo');
    });
  });

  describe('Número igual a 0', () => {
    it('é uma string', () => {
      const resposta = functionModule(0);
      expect(resposta).to.be.a('string');
    });
    it('deve retornar "neutro" ', () => {
      const resposta = functionModule(0);
      expect(resposta).to.be.a.equals('neutro');
    });
  });
});
