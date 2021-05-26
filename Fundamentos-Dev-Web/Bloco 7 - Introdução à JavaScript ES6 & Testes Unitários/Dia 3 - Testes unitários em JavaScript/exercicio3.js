const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}
//exercicio 1
assert.strictEqual(typeof(myRemoveWithoutCopy), 'function', 'myRemoveWithoutCopy deve ser uma função');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'o valor 3 deverá ser removido');
//exercicio 2
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'o valor 3 deverá ser removido');
//exercicio 4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O retorno deverá ser [1, 2, 3, 4]');
//exercicio 3
const test = [1, 2, 3, 4];
assert.deepStrictEqual(myRemoveWithoutCopy(test), [1, 2, 3, 4])