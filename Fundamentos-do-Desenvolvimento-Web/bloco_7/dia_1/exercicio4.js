//a lógica desse exercicio foi separar um array recebido
// usar o método slit para separá-lo por espaços e passar um laço nele
//retornar a letra com mais caracteres
const longestWord = (text) => {
    let wordSeparation = text.split(' ');
    let wordNumber = 0;
    let bigWord;
        for (let index = 0; index < wordSeparation.length; index += 1) {
            let counter = wordSeparation[index];
            if (counter.length > wordNumber) {
                wordNumber = counter.length 
                bigWord = counter;
            }
        }
    return bigWord;
} 
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));





