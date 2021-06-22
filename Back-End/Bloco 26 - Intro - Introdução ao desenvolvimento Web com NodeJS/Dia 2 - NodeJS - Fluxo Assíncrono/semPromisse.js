// O objetivo é fazer uma função para dividir - de forma SÍNCRONA

function dividirNumeros(n1, n2) {
  if(n2 === 0) throw new Error('Não existe divisão por zero');
  const resultado = n1 / n2;
  return resultado;
}

// Tratando o caso de sucesso e erro com o try/catch
try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch(e) {
  console.log(e.message);
}
