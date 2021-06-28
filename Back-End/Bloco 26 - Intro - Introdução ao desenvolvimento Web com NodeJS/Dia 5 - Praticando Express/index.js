// Créditos => Exercicios feitos em grupo com o Tiago Yoneda, Leticia Lima, Gal e Brolesi da t9, de acordo com a dinâmica do dia


const express = require('express');
const middlewares = require('./middlewares/index');
const auxiliarFunctions = require('./auxiliarFunctions/index');
const bodyParser = require('body-parser');

const listenPort = 3000;

const app = express();
app.use(bodyParser.json());
// Atividade 1:
// Rota: /login
// Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.
app.put('/login', middlewares.checkLogin, middlewares.generateToken);

// Atividade 2:
// Rota: /btc/price
// Objetivo: Receber uma requisição com um token e verificar se ele está correto. O formato do token deve ser uma string de 12 caracteres contendo letras e números. Caso o formato do token esteja incorreto, devolva o erro como resposta invalid token. . Caso o formato do token esteja correto, faça um fetch em uma API externa de sua preferencia e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O token será passado pelo header da seguinte forma: Authorization: asd65asd5sd8
const fetch = require('node-fetch');
// npm install node-fetch

app.get('/btc/price', middlewares.checkToken, async (_req, res) => {

  const endpoint = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";

  const data = await fetch(endpoint).then(response => response.json());

  res.status(200).json(data);

});

// Atividade 3:
// Rotas: /posts/:id e /posts
// Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id . Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem id not found. . A rota /posts deve trazer todos os posts cadastrados.
const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
];

app.get('/posts', (_req, res) => {
  res.status(200).json({
    posts,
  });
});

app.get('/posts/:id', (req, res) => {
  const myId = parseInt(req.params.id);


  const myUser = posts.find(({id}) => id === myId);


  if(!myUser) {
    return res.status(404).json({
      message: "id not found",
    });
  };

  res.status(200).json(
    myUser
  )
});

// Atividade 4:
// Rota: /user/:name
// Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found. .
const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]

app.get('/user/:name', (req, res) => {
  const myName = req.params.name;

  const myUser = users.find(({ user }) => user === myName);

  if(!myUser) return res.status(404).json({
    message: "user not found"
  });

  res.status(200).json(
    myUser.comments
  )
});

// Atividade 5:
// Rota: /:operacao/:numero1/:numero2
// Objetivo: Deve validar a operação e retornar o resultado da mesma. As operações podem ser soma , subtração , divisão ou multiplicação . Regra: Um middleware deve ser usado para cada operação. A operação deve ser recebida como parâmetro na rota.
app.get('/:operacao/:numero1/:numero2', (req, res) => {
  const { operacao } = req.params;
  const numero1 = parseInt(req.params.numero1);
  const numero2 = parseInt(req.params.numero2);

  switch (operacao) {
    case 'soma':
      return res.status(200).json({
        resultado: numero1 + numero2
      });
    case 'subtracao':
      return res.status(200).json({
        resultado: numero1 - numero2
      });
    case 'multiplicacao':
      return res.status(200).json({
        resultado: numero1 * numero2
      });
    case 'divisao':
      return res.status(200).json({
        resultado: numero1 / numero2
      });
    default:
      return res.status(406).json({
        message: "operacao invalida"
      });
  };
});

// outro jeito
app.get('/new/:operacao/:numero1/:numero2', middlewares.validaOperacao, (req, res) => {
  const { operacao } = req.params;
  const numero1 = parseInt(req.params.numero1);
  const numero2 = parseInt(req.params.numero2);

  const resultado = auxiliarFunctions.operations(operacao, numero1, numero2);

  res.status(200).json({
    resultado,
  });
});

// Atividade 6:
// Rota: /recipe/:id
// Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro recipe not found .
// Use o array abaixo para simular o banco de dados:
let recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredients:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredients:['ovo']
  }
];

app.delete('/recipe/:id', (req, res) => {
  const myId  = parseInt(req.params.id);

  const myRecipe = recipes.find(({id}) => id === myId);

  if(!myRecipe) return res.status(404).json({
    message: "recipe not found"
  });

  recipes = recipes.filter(({id}) => id !== myId);

  res.status(200).json({
    receitaDeletada: myRecipe,
    receitasRestantes: recipes,
  });
});

// Atividade 7:
// Rota: /recipe/:id
// Objetivo: Deve receber uma requisição com name e ingredients de uma receita, e substituir no banco de dados a receita que possua o id passado na requisição retornando a receita com a nova alteração. Caso o id fornecido não exista, retorne um erro recipe not found .
// Use o array abaixo para simular o banco de dados:
// no body usar ingredientes:='["ingrediente1", "ingrediente2"]' para passar array
app.put('/recipe/:id', (req, res) => {

  const myId = parseInt(req.params.id);
  const { name, ingredients } = req.body;

  if(!name || !ingredients) return res.status(400).json({
    message: 'Missing parameters'
  });

  const myRecipe = recipes.find(({id}) => id === myId);

  if (!myRecipe) return res.status(404).json({
    message: "recipe not found"
  });
  const myIndex = auxiliarFunctions.findIndexById(recipes, myId);

  auxiliarFunctions.replaceValues(recipes, myIndex, name, ingredients);
res.status(200).json(myRecipe);
});

// Atividade 8:
// Rota: /comments
// Objetivo: Deve retornar todos os comentários. Se houver um query param filter na requisição, deve retornar apenas os comentários que incluem o filtro.
// Use o array abaixo para simular o banco de dados:
app.get('/comments', (req, res) => {
  const { filter } = req.query;

  const allComments = users.reduce((acc, { comments: userComments } ) => [...acc, ...userComments],[]);

  if(filter) return res.status(200).json(
    allComments.filter((comment) => comment.includes(filter))
  );

  res.status(200).json(
    allComments
  );
});

// Atividade 9:
// Rota: /user/:id
// Objetivo: Deve receber no campo status um booleano e alterar o status do usuário correspondente retornando o usuário em específico. Se o campo status não for um booleano, deve retornar o error "status isn't a boolean". Caso não exista usuário correspondente, deve retornar o error "user isn't found".
// Use o array abaixo para simular o banco de dados:
const newUsers = [
  {
    id: 2,
    user: 'marcos',
    isActive: true
  },
  {
    id: 3,
    user: 'paulo',
    isActive: true

  },
  {
    id: 4,
    user: 'roger',
    isActive: false
  }
];

app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if(typeof status !== 'boolean') return res.status(400).json({
    message: "status must be a boolean",
  });

  const myUser = auxiliarFunctions.changeUserStatus(newUsers, id, status);
  
  if(myUser) return res.status(200).json(myUser);

  res.status(404).json({
    message: "user not found"
  });
});

// Atividade 10:
// Rota: /recipe/:id/ingredients
// Objetivo: Deve receber uma requisição com os campos remove e/ou insert . O valor deve ser um array de ingredientes para remover ou adicionar na receita correspondente. Caso o id fornecido não exista, retorne um erro recipe not found .
// Usar o array de receitas
// let recipes = [
//   {
//     id:12345,
//     name:'farofa de bacon',
//     ingredients:['farofa', 'bacon']
//   },
//   {
//     id:12346,
//     name:'ovo mexido',
//     ingredients:['ovo']
//   }
// ];
// vamos usar DELETE e POST

// o array de ingredients vem no body no formato  ingredients:='["ingrediente1", "ingrediente2"]'
// no o jeito de fazer a requisição é 'http PUT/DELETE :3000/id/ingredients ingredients:='["ingredient1", "ingredient2"]'
// desse jeito que foi feito acaba mexendo na variavel recipes, talvez seria melhor deixar somente no log?
app.route('/recipe/:id/ingredients') // o all é só para verificar se a receita existe
  .all((req, res ,next) => {
    const myId = parseInt(req.params.id);

    if(!recipes.find(({id}) =>id === myId)) return res.status(404).json({
      message: "recipe not found"
    });

    next();
  }) // depois daqui vem o put
  .put((req, res) => {
    const myId = parseInt(req.params.id);
    const { ingredients } = req.body

    const myIndex = auxiliarFunctions.findIndexById(recipes, myId);
  
    if(!ingredients) return res.status(400).json({
      message: "ingredients not found"
    });

    ingredients.forEach((ingredient) => (recipes[myIndex].ingredients).push(ingredient));

    res.status(200).json(
      recipes[myIndex]
    );
  }) // depois daqui vai o delete
  .delete((req, res)  => {
    const myId = parseInt(req.params.id);
    const { ingredients } = req.body

    const myIndex = auxiliarFunctions.findIndexById(recipes, myId);
  
    if(!ingredients) return res.status(400).json({
      message: "ingredients not found"
    });

    let myIngredientArray = recipes[myIndex].ingredients;

    ingredients.forEach((ingredient) => myIngredientArray = myIngredientArray.filter((myIngredient) => myIngredient != ingredient));

    recipes[myIndex].ingredients = myIngredientArray;

    res.status(200).json(
      recipes[myIndex]
    );
  });

// extra
app.get('/recipes', (_req, res) => {
  res.status(200).json({
    recipes
  });
});

app.listen(listenPort, () => {
  console.log(`App working on port ${listenPort}`);
});
