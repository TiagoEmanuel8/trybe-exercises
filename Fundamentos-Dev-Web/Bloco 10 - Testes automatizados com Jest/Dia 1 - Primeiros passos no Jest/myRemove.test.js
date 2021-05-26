const { it, expect } = require('@jest/globals');
const myRemove = require('./myRemove');

describe ('testes para a função myRemove', () => {
    it('testando se a função remove o número passado como parâmetro do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('testando se a função não remove o número passado como parâmetro do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('testando se não passar o segundo parâmetro, a função vai remover', () => {
        expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    it('testando se a função remove o número passado como parâmetro do array', () => {
        expect(myRemove([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4]);
    });
});