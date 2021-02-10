const randomNumber = require('./randomNumber.js');

describe('Testando a função randomNumber', () => {
    test('Testando se a função é chamada ', () => {
        const randomNumber = jest.fn()
        randomNumber()
        expect(randomNumber).toHaveBeenCalled();
    });
    test('Testando o retorno da função fazendo simulação', () => {
        const randomNumber = jest.fn().mockReturnValue(10)
        expect(randomNumber()).toBe(10)
    });
    test('Testando quantas vezes a função foi chamada', () => {
        const randomNumber = jest.fn()
        randomNumber()
        expect(randomNumber).toHaveBeenCalledTimes(1)
    });
});
