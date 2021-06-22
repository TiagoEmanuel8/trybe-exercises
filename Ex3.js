// Exercicio 2
let a = Math.floor(Math.random() * 100 + 1);
let b = Math.floor(Math.random() * 100 + 1);
let c = Math.floor(Math.random() * 100 + 1);

// Exercicio 1
function calculateNumbers(a ,b, c) {
  const promisse = new Promise((reject, resolve ) => {
    
    const numbers = a + b + c;
    if(typeof numbers !== 'number') {
      reject(new Error('Informe apenas numeros'));
      return;
    }
    const calculate = (a + b) * c;
    if(calculate < 50){
      reject(new Error('Valor muito baixo'));
    };
    resolve(calculate)
  });
  return promisse;
}

// Exercicio 3
async function calculateAsync() {
  try {
    await calculateNumbers(a, b, c)
  } catch(err) {
    console.log(err.message);
  }
}

calculateAsync();
