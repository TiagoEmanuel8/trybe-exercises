const {findUserById, getUserName, users} = require('./BdWithAsync.js');

describe('testando o acesso ao banco de dados ', () => {
    it ('Teste positivo - Passando um parâmetro válido na função', async (done) => {
        const resposta = await getUserName(5)
        expect(resposta).toEqual('Paul')
        done();
    });
    it('Teste negativo - Passando um parâmetro inválido para a função', async (done) => {
        try {
            await getUserName(1)
        } catch (error) {
            expect(error).toEqual({error: 'User with 1 not found.'});
            done();
        }
    });
 });