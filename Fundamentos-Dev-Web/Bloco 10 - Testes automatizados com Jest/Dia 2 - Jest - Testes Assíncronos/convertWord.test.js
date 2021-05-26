const uppercase = require('./convertWord.js');

describe('testando a função uppercase', () => {
    it('Teste para saber se a função está convertendo a string de minúscula para maiúscula', (done) => {
        uppercase('pizza', (funcao) => {
            expect(funcao).toBe('PIZZA');
            done();
        });
    });
});