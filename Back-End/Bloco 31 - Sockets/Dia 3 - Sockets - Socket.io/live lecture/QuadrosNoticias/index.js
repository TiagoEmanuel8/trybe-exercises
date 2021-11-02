const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const EXPRESS_PORT = 3000
const SOCKETIO_PORT = 5000

// 1 - configuração para criar o server
const socketIoServer = require('http').createServer(app); // 8 - deixar o socket e o express na msm porta - util para deploy
const io = require('socket.io')(socketIoServer, {
  cors: { // Aqui existe um objeto de configuração, essas options são necessárias a partir da major 3 do socket.io 
    origin: `http://localhost:${EXPRESS_PORT}`, // origem permitida
    methods: ['GET', 'POST'], // métodos permitidos
  },
});

// 3 - vou jogar mensagens para o front
io.on('connection', (socket) => {
  // 6 - metodo ssr para enviar msgs para o front
  socket.emit('loadNotifications', NEWS);
  console.log(`novo usuário ${socket.id}  conectado ao socket.io`); // essa malícia ja da o id de forma rápidas
})

// 2 - configuro a view
app.set('view engine', 'ejs')
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 9 - forma de dizer ao node que os arquivos sao estáticos, util para fazer um html normalzão, separando js e css
app.use('/assets', express.static('./assets/javascripts'));
app.use('/assets', express.static('./assets/css'));

const NEWS = []; // 5 - array com notificação

// 2 - crio um caminho para a rota
app.get('/board/ssr', (_req, res) => {
  // 5.1 - Vou chamar esse componente e passar o array de msgs
  res.render('board/ssr', { notifications: NEWS }); 
})

// 2 - crio um caminho para a rota
app.get('/board/csr', (req, res) => {
  res.render('board/csr');
})

// 2 - crio um caminho para a rota
app.post('/notify', (req, res) => {
  const { notification } = req.body;

  NEWS.push(notification); // 5 - jogar a notificação num array

  io.emit('notification', notification); // joga uma msg de novo usuario para todos da rede, ficar atento aos parâmetros, (nome parametro, mensagem)

  res.status(201).json({ message: 'Notificado com sucesso'});
});

// app.listen(EXPRESS_PORT, () => console.log(`Express app listening on port ${EXPRESS_PORT}!`));

// 8 - essa magica e para parte do deploy tb
// 3 - exibe a msg do lado do server
socketIoServer.listen(EXPRESS_PORT, console.log(`Socket.io server listening on port ${SOCKETIO_PORT}!`))