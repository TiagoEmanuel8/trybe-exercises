// hello word typescript
// let fullName: string = 'Tiago Emanuel';
// console.log(`Hello, ${fullName}!`);


// inferência de tipos - usar o tipo certo
// function gritar(name: string) {
//   console.log(typeof name);

//   // name = 'teste';
//   return name.toUpperCase();
// };

// console.log(gritar('oi'))

// posso usar 2 tipos para uma variável
// let variavel: string | number;
// variavel = 'hello';
// variavel = 10;
// variavel = false; // não vai aceitar o tipo boolean

// trabalhando com funções
import { gritar, loga } from './functions';

// tipagem para passar um array
const nomes: string[] = ['Renato', 'Pedro', 'Leandro'];

// const nomes: string[] = ['Renato', 1, 'Leandro'];

nomes.map((nome) => console.log(gritar(nome))) // chamada normal para a função

// sentindo o void - mas vai dar undefined
// nomes.map((nome) => {
//   let nameUpperCasee = gritar(nome);
//   let name = loga(nameUpperCasee.trim())
//   console.log(name)
// })