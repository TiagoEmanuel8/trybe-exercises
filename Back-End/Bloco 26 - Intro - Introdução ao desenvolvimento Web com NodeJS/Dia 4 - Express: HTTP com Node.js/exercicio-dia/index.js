// Aprendi esse método de organizar com o Tiago Yoneda, obrigado !!!

// Estrutura Básica
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// app.listen(3001, () => {
//   console.log('Porta 3001, Ok!!!');
// });

// -----------------------------------------------

// Exercicio 1 - 
// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // 1.1 - Criei uma função que retorna uma mensagem
// const message = (_req, res) => {
//   res.json({ message: 'pong' });
// };
// // 1.2 => Criei a rota /ping
// // 1.3 => chamada => http GET :3001/ping
// app.get('/ping', message);

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

//---------------------------------------------

// Exercicio 2 -
// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Exercicio 2 - Crie uma rota POST /hello 
// // 2.1 => função para capturar o que for passado após o '='
// const username = (req, res) => {
//   res.status(200).json({ message: `Hello, ${req.body.name}` });
//   next();
// }; // => sintaxe linda, obrigado yoneda

// // 2.2 => Criação da rota /hello + função mensagem
// // 2.3 => chamada => http POST :3001/hello name=nome
// // Obs: usar o '=' para chamar no corpo
// app.post('/hello', username);


// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

//----------------------------------------------------

// Exercicio 3 - 
// Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// const userAge = (req, res) => {
//   const name = req.body.name;
//   const ageCheck = parseInt(req.body.age);

//   if(ageCheck <= 17) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
//   res.status(200).json({
//     message: `Hello ${name}`
//   });
// };

// app.post('/greetings', userAge);
// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

//---------------------------------------------

// Exercicio 4 -
// Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());
// // 4.1 - Função que trata a url
// const user = (req, res) => {
//   const { name, age } = req.params; // Pega partes da url
//   res.status(200).json({
//     message: `Seu nome é ${name} e você tem ${age} anos de idade`
//   });
// };
// // 4.2 - Definindo a rota do exercicio
// // chamada => http PUT :3001/users/Tiago/20
// app.put('/users/:name/:age', user);

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

//--------------------------------

// Para os próximos quesitos

// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK 

const express = require('express');
const bodyParser = require('body-parser');

const rescue = require("express-rescue");
const { readSimpsons } = require('./readWriteSimpsons')

const app = express();
app.use(bodyParser.json());

// Exercicio 5 - Um simples fetch para o arquivo 'data'
app.get('/simpsons', rescue(async (_req, res) => {
  const simpsonsList = await readSimpsons();

  res.status(200).json(simpsonsList);
}));

//-------------------------

// Exercicio 6 - Um fetch que retorna o erro, caso o id não seja válido, e caso seja válido vai trazer o simpson correspondente
app.get("/simpsons/:id", rescue(async (req, res) => {
  const { id } = req.params;

  const simpsonsList = await readSimpsons();

  const mySimpson = simpsonsList.find(simpson => simpson.id === id);

  if (!mySimpson) res.status(404).json({ message: "Simpson not found"});

  res.status(200).json(mySimpson);
}));

app.listen(3001, () => {
  console.log('Porta 3001, Ok!!!');
});

