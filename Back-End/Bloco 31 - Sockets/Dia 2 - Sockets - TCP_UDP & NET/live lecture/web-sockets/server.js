// 1.1 - nativo do express
const net = require('net');

// 3 - essa logica é para ver todos os clientes que se conectaram
let connectedClients = [];
let clientId = 0;
// 4 - essa função exibe simultaneamente para outros clientes as mensagens
const broadcastMessage = (from, message) => {
  connectedClients
  .filter((client) => client.id !== from.id) // nao exibe a msg para o cliente que se conectou
  .forEach((client) => { // exibe a mensagem para os outros clientes
    client.write(message)
  });
}

// 1.2 - cria um server que suporta o socket
const server = net.createServer((socket) => {
  console.log(`Clientes conectados: ${connectedClients.length}`);
  console.log("novo cliente conectado");

  // 3.1 - quero que essa variavel se incremente
  clientId = clientId + 1;
  // 3 - vai dar um id para cada cliente que se conectar
  socket.id = `Cliente${clientId}`;
  // 3.2 - exibe para os clientes, a msg com o id do cliente conectado
  socket.write(`Bem vindo, ${socket.id}!`); // o server se comunica com o cliente

  // 3.4 - Vou mandar uma lista com todos os clientes conectados
  connectedClients.push(socket);
  // 3.1 - essa papagaiada é para dizer qual o cliente que entrou
  broadcastMessage(socket, `O cliente #${socket.id} entrou!`);

  // 2.1 - método para receber msg no lado do cliente
  socket.on('data', (data) => {
    console.log(`mensagem recebida do cliente: ${data.toString()}`);

    broadcastMessage(socket, `${socket.id} > ${data}!`);
  });

  // 4.1 - exibe mensagem que o cliente saiu
  socket.on('end', () => { 
    console.log(`Clientes conectados: ${connectedClients.length}`);
    broadcastMessage(socket, `O cliente #${socket.id} saiu!`);
    connectedClients = connectedClients.filter((client) => client.id !== socket.id); // 
  })
});

// 1.3 - mostrar a msg que o server está rodando
server.listen(2501, () => console.log('Websockets is running...')); 
