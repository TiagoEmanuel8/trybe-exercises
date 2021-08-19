const readline = require('readline-sync');

module.exports = {
  calculaArea: () => {
    const altura = readline.questionInt('Digite o valor de altura: ');
    const largura = readline.questionInt('Digite o valor de largura: ');

    const area = altura * largura;

    return area;
  },
};
