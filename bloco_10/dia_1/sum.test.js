const { expect } = require('@jest/globals');
const sum = require('./sum');

describe ('Testando função sum', () => {
    it('Teste passando os valores 4 e 5 como parâmetros', () => {
        expect(sum(4,5)).toEqual(9);
    });
});