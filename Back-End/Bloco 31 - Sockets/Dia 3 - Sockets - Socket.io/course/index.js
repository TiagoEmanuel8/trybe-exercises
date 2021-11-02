const express = require('express');
const app = express();
const http = require('http').createServer(app);

// 1 - essa rota é chamada e redireciona para o html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 2 - Usar o CORS para dizer quais os métodos + url aceitos pela requisição
const cors = require('cors'); // 2.1 - Importa o cors
const io = require('socket.io')(http, { // 2.2 - Chamar o socket
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});
// 2.3 - quero exibir uma msg para quando um user entrar
io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);

  // 3 - Exibo uma mensagem para quando alguém se desconectar
  socket.on('disconnect', () => {
    console.log('Vish, alguém saiu :( ');
  })

  // 5 - recebendo msg do input
  socket.on('mensagem', (msg) => {
    // console.log(`Alguém enviou a mensagem ${msg}`);

    // 9 - mando a msg para o front
    io.emit('newConnection', { message: msg })
  })

  // 6 - msg para exibir qd algué se conectar ao chato - vai ser tratada pelo
  socket.emit('message', ('Seja bem vindo(a) ao TrybeChat'));

  // 7 - manda msg para todos os outros participantes, assim que um novo user se conectar, mas essa nova msg nao aparece para quem acabou de se conectar
  socket.broadcast.emit('newConnection', { message: 'Oba, Eba, uhul tivemos uma nova conexão!!!' });

  // 8 - escuto o evento que veio do node
  socket.on('newConnection', ({message}) => createMessage(message));
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});