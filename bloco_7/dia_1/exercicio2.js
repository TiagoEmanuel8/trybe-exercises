//o método '.sort()' já ordena string ou números, mas tem uma limitação de não colocar em ordem crescente números ex: 1, 2, 10, 11
//a solução '.sort(a, b) = a-b deixa tudo em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens);


