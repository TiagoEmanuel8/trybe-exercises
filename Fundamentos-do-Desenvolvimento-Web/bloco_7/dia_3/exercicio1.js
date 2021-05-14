const assert = require('assert');
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros precisam ser números');
  }
  return a + b;
}
assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4, 5), 9, 'a resposta deve ser igual a 9');
assert.strictEqual(sum(0, 0), 0, 'A resposta deve ser igual a 0');
assert.throw(() => sum(4, '5'));