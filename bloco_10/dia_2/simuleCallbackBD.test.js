const {findUserById, getUserName, users} = require('./simuleCallbackBD');

// decribe('testando o acesso ao banco de dados', () => {
    it('Teste para descobrir se o usuário é encontrado', () => {
       expect.assertions(1)
        return getUserName(4)
       .then((resposta) => {
           expect(resposta).toEqual('Mark')
       })
    });
    it('Teste de erro - quando é passado um id não existente no banco de dados', () => {
        return getUserName(1)
        .catch((error) => {
            expect(error).toEqual({error: 'User with 1 not found.'})
        })
    })
// });

//Usando o resolves/rejects
// describe('xablau', () => {
//     it('Teste de sucesso - quando é passado um id existente no banco de dados', () => {
//         return expect(getUserName(4)).resolves.toEqual('Mark');
//     });
//      it('Teste de erro - quando é passado um id não existente no banco de dados', () => {
//         return expect(getUserName(1)).rejects.toEqual({error: 'User with 1 not found.'});
//     });
// });
