const express = require('express')
const cors = require('cors');
const app = express()
const PORT = 3001
const server = require('http').createServer(app);


const Language = require('./models/Language');
// 1 - fazer o cors para liberar integração front e back end
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
  }
});
// 1.1 - cors para geral app.use(cors());
// 1.2 - uso geral de cors é 

const votesSocket = require('./sockets/votesSocket');
votesSocket(io);


var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.get('/languages', async (req, res) => {
  const languages = await Language.getAll();
  res.status(200).json(languages);
});

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))