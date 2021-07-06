// 2 => Config da conexão Mysql com a Tabela sql
const connection = require('./connection');

// 2.1 => Chamando a query do Mysql
// const getAll = async () => {
//   // 2.2 => Essa forma de forma de [] é só pra pegar a query em si - obrigatório
//   const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
//   return authors;
// };

// module.exports = { getAll };

// ------------------------------------------------

// 3 => enfeitando o pavão (colocando camel case)

// const connection = require('./connection');

// // 3.3 => Função para colocar o nome do autor como último
// const getNewAuthor = ({id, firstName, middleName, lastName}) => {
//   const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
//   return { 
//     id, 
//     firstName, 
//     middleName, 
//     lastName, 
//     fullName}
// };

// // 3.1 => Fazendo o camelCase
// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name
//   }
// }

// const getAll = async () => {
//    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
//    // 3.2 => Chamando a função do camelCase
//   return authors.map(serialize).map(getNewAuthor);
// };

// module.exports = { getAll };

// ---------------------------------------------------------

// 4 - Vou passar um id e conferir se existe esse id no BD

// const connection = require('./connection');

// const getNewAuthor = ({id, firstName, middleName, lastName}) => {
//   const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
//   return { 
//     id, 
//     firstName, 
//     middleName, 
//     lastName, 
//     fullName
//   }
// };

// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name
//   }
// }

// const getAll = async () => {
//    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
//   return authors.map(serialize).map(getNewAuthor);
// };

// // 4 - Função que vai fazer o filtro do que for passado no POST e a query no sql
// const findById = async(id) => {
//   const query = 'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?'
//   const [authorData] = await connection.execute(query, [id]); 

//   if(!authorData) return null;

//   const { firstName, middleName, lastName } = authorData.map(serialize)[0];

//   return getNewAuthor({ id, firstName, middleName, lastName });
// };

// // 5 - Função que valida os dados passados
// const isValid = (firstName, middleName, lastName) => {
//   if(!firstName || typeof firstName !== 'string') return false;
//   if(!lastName || typeof lastName !== 'string') return false;
//   return true;
// }

// // 5 - Função que cria o dado de fato no mysql
// const create = async (firstName, middleName, lastName) => {
//   const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)'
//   connection.execute(query, [firstName, middleName, lastName]);
// };

// module.exports = {
//   getAll, 
//   findById,
//   isValid,
//   create
// };

// ------------------------------ REFATORADINHA EM MONGODB ------------------------

const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
  return { 
    id, 
    firstName, 
    middleName, 
    lastName, 
    fullName
  }
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}
// query em MONGODB sintaxe básica connection().then().then()
const getAll = async () => {
   connection()
   // query com o mongo, seleciona o banco + quero trazar tudo + converter em Array
   .then((db) => db.collection('authors').find().toArray())
   // O retorno é uma promisse, por isso um 2º then
   .then((authors) => {
     // já desestruturo os campos do BD
     return authors.map(({_id, firstName, middleName, lastName}) => {
       // Já coloco o resultado da forma que quero
      return getNewAuthor({
        id: _id, firstName, middleName, lastName
      })
     });
   });
};

// Esse import é para buscar um objeto
const { ObjectId } = require('mongodb');
const findById = async(id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))

  if(!authorData) return null;
  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
  if(!firstName || typeof firstName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;
  return true;
}

// Função que faz o CREATE
const create = async (firstName, middleName, lastName) => {
  await connection()
    // A query seleciona o BD e insere um valor no BD
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
};

module.exports = {
  getAll, 
  findById,
  isValid,
  create
};