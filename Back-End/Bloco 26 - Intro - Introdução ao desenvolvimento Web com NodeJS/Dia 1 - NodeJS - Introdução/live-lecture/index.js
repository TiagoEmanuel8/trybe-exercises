const readline = require('readline-sync');

// (-b ± √Δ) / (2 * a)

function executaCalculo() {
  const a = readline.questionInt('Digite o valor de a: ');
  const b = readline.questionInt('Digite o valor de b: ');
  const c = readline.questionInt('Digite o valor de c: ');

  const delta = calculaDelta(a, b, c);

  if (delta < 0) {
    console.log(
      `Impossível calcular pois o valor de delta é negativo: ${delta}`
    );
    return;
  }

  console.log(`delta = ${delta}`);

  const resultado = calculaX(a, b, delta);

  console.log(`Resultado: x1 = ${resultado.x1}, x2 = ${resultado.x2}`);
}

// Δ = b² - 4ac

function calculaDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

function calculaX(a, b, delta) {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return { x1, x2 };
}

executaCalculo();
