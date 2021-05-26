const getRepos = require('./git.js');

describe('Testando a função getRepos', () => {
    it('Teste para ver se a api contém o projeto todo-list',async (done) => {
        const resposta = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(resposta).toContain('sd-01-week4-5-project-todo-list');
        done();
    });
    it('Teste para ver se a api contém o projeto meme-generator', () => {
        expect.assertions(1)
        return getRepos('https://api.github.com/orgs/tryber/repos')
        .then((resposta) => {
            expect(resposta).toContain('sd-01-week4-5-project-meme-generator')
        })        
    }) 
})