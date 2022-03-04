let languages: string[] = [];
let ids: number[] = [];

languages.push('teste !');
// languages.push(1); // vai falhar
console.log(languages);

ids.push(1);
// ids.push('hello'); // vai falhar
console.log(ids);

//---------

// exemplo de uso de arrays
const nomes: string[] = ['Renato', 'Pedro', 'Leandro'];

// const nomes: string[] = ['Renato', 1, 'Leandro'];

nomes.map((nome) => console.log(nome))