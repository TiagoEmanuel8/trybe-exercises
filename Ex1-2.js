// Exercicio 2
let a = Math.floor(Math.random() * 100 + 1);
let b = Math.floor(Math.random() * 100 + 1);
let c = Math.floor(Math.random() * 100 + 1);

// Exercicio 1
function calculateNumbers(a ,b, c) {
  const promisse = new Promise((reject, resolve ) => {
    const check_numbers = a + b + c;
    if(typeof check_numbers !== 'number') {
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

// Exercicio 2
calculateNumbers(a, b, c)
  .then(result => console.log(result))
  .catch(err => console.log(err));