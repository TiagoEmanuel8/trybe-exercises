const { it } = require('@jest/globals');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe ('teste da função myRemoveWithoutCopy', () => {
    it('testando se a função remove do item passado como parâmetro', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('testando se a função não remove do item passado como parâmetro', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('testando se a função remove o item passado como parâmetro', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    it('testando se a função não se altera caso um item não esteja no array', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});