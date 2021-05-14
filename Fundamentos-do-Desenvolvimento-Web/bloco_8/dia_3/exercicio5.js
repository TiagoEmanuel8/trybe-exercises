
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((sum, name) => {
    return sum + name.split('').reduce((sumSplit, caracter) => (caracter === 'a' || caracter === 'A') ? sumSplit +1 : sumSplit, 0);
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);

// usei o split para dividir as letras e dentro dele um novo reduce para ir contando a quantidade de 'a' que aparece 