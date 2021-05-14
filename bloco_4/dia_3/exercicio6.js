//exercicio feito com a ajuda do plantão
let divisors;
let numberToCheck = 17;

for (let number = 2; number < numberToCheck && divisors !== 1; number += 1) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors += 1;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');

