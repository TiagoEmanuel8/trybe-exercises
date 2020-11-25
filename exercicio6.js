//Esse exercício era para substituir uma parte da palavra por outra
//o método "string.replace('palavraAntiga', 'palavraNova')"" resolve esse problema
const replace = (str) => {
    let phrase = 'Trybe x aqui';
    let newPhrase = phrase.replace('x', str);
    return newPhrase;
}
console.log(replace('Tiago'))

