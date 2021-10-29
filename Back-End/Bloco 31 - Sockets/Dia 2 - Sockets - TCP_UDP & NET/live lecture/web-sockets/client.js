// 1.1
const net = require('net'); 
// 4 - lê dados do terminal
const stdin = process.openStdin();

// 1.2 - instancia o novo socket
const client = net.Socket(); 

// 1.3 - conecta ao socket, a versão clean é client.connect(2501, 'localhost')
client.connect(2501, 'localhost', () => { 
  // 4 - vai capturar o que for digitado no terminal
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();

    client.write(message); // 2.1 - metodo para mandar msg, do cliente para o server

    // o fluxo nesse write é, write para falar e on para ouvir a mensagem
  })
});

// 2.2 - recebe uma mensagem do server
client.on('data', (data) => { // analogia com o addEventListener e data é uma propriedade específica
  console.log(data.toString());
});
