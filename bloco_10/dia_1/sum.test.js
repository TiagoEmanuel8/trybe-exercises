const { expect, it } = require('@jest/globals');
const sum = require('./sum');

describe ('Testando função sum', () => {
    it('Testando a função sum passando 4 e 5 como parâmetros', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('Testando a função sum passando 0 e 0 como parâmetros', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Testando a função sum passando uma string como parâmetro', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow('wparameters must be numbers');
    });
});