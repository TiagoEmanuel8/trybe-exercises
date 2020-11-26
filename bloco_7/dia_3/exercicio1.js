const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
assert.strictEqual(typeof sum, 'function')
assert.strictEqual(sum(4, 5), 9, '5 + 4 = 9');
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');
//Porque a função não retorna o erro?f
assert.throws(() => sum (4, '5'));