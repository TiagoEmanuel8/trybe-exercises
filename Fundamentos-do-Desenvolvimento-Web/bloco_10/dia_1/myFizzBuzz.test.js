const { it } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe ('testando a função myFizzBuzz', () => {
    it('testando um número divisível por 3 e 5 ao mesmo tempo',() => {
        expect(myFizzBuzz(60)).toBe('fizzbuzz');
    });
    it('testando um número divisível por 3', () => {
        expect(myFizzBuzz(27)).toBe('fizz');
    });
    it('testando um número divisível por 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    it('testando um número que não é divisível por 3 ou 5', () => {
        expect(myFizzBuzz(11)).toBe(11);
    });
    it('testando a função passando uma string no lugar de um número', () => {
        expect(myFizzBuzz('xablau')).toBeFalsy();
    });
});