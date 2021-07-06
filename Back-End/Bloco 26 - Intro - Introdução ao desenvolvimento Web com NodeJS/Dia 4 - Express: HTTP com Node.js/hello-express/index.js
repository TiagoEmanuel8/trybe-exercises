// 1 - Importar o NodeJs
// const express = require('express');

// // // 2 - Instanciar o express
// const app = express(); // 1

// // 4 - Get vai dizer quando tiver essa rota, vai chamar a função
// app.get('/hello', function (req, res){
//   res.send('Teste');
// }); // 2

// // 3 - Pedir para escutar a porta 3000 e mostrar um console.log()
// app.listen(3000, () => {
//    console.log('Aplicação ouvindo na porta 3000');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//    res.status(200).send('Hello World!'); // 4
// }
// -----------------------------------------------

// 1 - importar o módulo responsável
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// 1 - instanciando o body-parser
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Hello World');
});

const langs = [ 'HTML', 'CSS', 'JS', 'React' ];

app.get('/langs', (req, res) => { res.send(langs) });
// 2 - Tratando o body-parser, a forma de tratar é um Js puro
// chamada => http POST :3000/langs name=Ruby
app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send(`Linguagem ${name} adicionada com sucesso!`);
});

app.listen(3000, () => console.log('App rodando na porta 3000!'));

//---------------------------------------------------------

// Middleware
// const bodyParser = require('body-parser'); 
// const express = require('express');
// const app = express();

// app.use(bodyParser.json());
 
// app.get('/', (_req, res) => {
//  res.send('Hello World');
// });
 
// const langs = [ 'HTML', 'CSS', 'JS', 'React' ];

// const logMiddleware = (req, res, next) => {
//   const { token } = req.headers;
//   if(!token) return res.send('Token não enviado');
//   next();
// }
// // Esse use vai ser chamado antes de qualquer método rodando abaixo dele
// app.use((req, res, next) => {
//   console.log('Passou por aqui');
//   next();
// })

// app.get('/langs', logMiddleware, (req, res) => { res.send(langs) });

// app.post('/langs', logMiddleware, (req, res) => {
//  const { name } = req.body;
//  langs.push(name);
//  res.send(`Linguagem ${name} adicionada com sucesso!`);
// });
 
// app.listen(3000, () => console.log('App rodando na porta 3000!'));

