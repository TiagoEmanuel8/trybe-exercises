const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(typeof(myFizzBuzz), 'function', 'myFizzBuzz deverá ser uma função');
assert.strictEqual(myFizzBuzz(30), 'fizzbuzz', 'O retorno deverá ser fizzbuzz');
assert.strictEqual(myFizzBuzz(18), 'fizz', 'O retorno deverá ser fizz');
assert.strictEqual(myFizzBuzz(20), 'buzz', 'O retorno deverá ser buzz');
assert.strictEqual(myFizzBuzz(23), 23, 'O retorno deve ser o próprio número');
assert.strictEqual(myFizzBuzz('teste'), false, 'Erro: Insira um número');