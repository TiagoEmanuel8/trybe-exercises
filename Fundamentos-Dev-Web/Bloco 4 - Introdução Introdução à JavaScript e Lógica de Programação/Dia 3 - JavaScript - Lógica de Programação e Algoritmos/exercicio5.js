//número máximo de caracteres na base
const n = 11;

//a lógica desse for é descer do topo até a base de 2 em 2 e gerar aquele mosaico
for (let i = 1; i <= n; i += 2) {
    let espacos = (n - 1) / 2;
    let asteriscos = ' ';
    //a esse for vai fazer os espaços no meio
    for (j = 0; j < i; j++) {
        if (j == 0 || j == i - 1 || i == n) {
            asteriscos += '*';
        } else {
            asteriscos += ' ';
        }
    }
    console.log(' '.repeat(espacos), asteriscos);
}
