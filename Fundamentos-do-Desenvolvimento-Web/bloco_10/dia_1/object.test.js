const {obj1, obj2, obj3} = require('./objects.js');
describe ('teste igualdade dos objetos', () => {
    it('testando se os objeto 1 e 3 são iguais', () => {
        expect(obj1).toEqual(obj3);
    });
    it('testando se os objetos 1 e 2 não são iguais', () => {
        expect(obj1).not.toEqual(obj2);
    });
});
