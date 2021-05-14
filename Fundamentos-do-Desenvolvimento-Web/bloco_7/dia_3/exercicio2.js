const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//exercicio 0
assert.strictEqual(typeof myRemove, 'function', 'myremove deve ser uma função');
//exercicio 1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'o valor 3 deverá ser removido');
//exercicio 2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'o valor 3 deverá ser removido');
//exercicio 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'o valor 5 não deverá aparecer'); 
//exercicio 3 - não entendi a lógica
const test = [1, 2, 3, 4];
//const number = 1;
assert.notDeepStrictEqual(myRemove(test), [1, 2, 3, 4], 'o array não deve sofrer alterações ao ser passado por parâmetro');