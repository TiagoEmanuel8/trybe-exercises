const randomNumber = require('./randomNumber.js');
// Fazendo o teste por partes para treinar mais
describe('Testando a função randomNumber', () => {
    test('Testando se a função é chamada ', () => {
        const randomNumber = jest.fn();
        randomNumber();
        expect(randomNumber).toHaveBeenCalled();
    });
    test('Testando o retorno da função fazendo simulação', () => {
        const randomNumber = jest.fn().mockReturnValue(10);
        expect(randomNumber()).toBe(10);
    });
    test('Testando quantas vezes a função foi chamada', () => {
        const randomNumber = jest.fn();
        randomNumber();
        expect(randomNumber).toHaveBeenCalledTimes(1);
    });
    test('Testando parâmetros passados para a função', () => {
        const randomNumber = jest.fn();
        randomNumber(1, 2)
        expect(randomNumber).toHaveBeenCalledWith(1, 2)
    })
    test('Testando a função randomNumber com uma nova implementação', () => {
        const randomNumber = jest.fn().mockImplementation((x , y) => x / y);
        randomNumber(9, 3)
        expect(randomNumber).toHaveBeenCalledWith(9, 3)
        expect(randomNumber(9, 3)).toBe(3);
    })
});
