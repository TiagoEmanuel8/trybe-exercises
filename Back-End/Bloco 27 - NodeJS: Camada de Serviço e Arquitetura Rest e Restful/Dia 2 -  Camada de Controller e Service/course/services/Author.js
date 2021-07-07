// 3 - Service faz apenas as validações/regras de negócio

// 3.1 => Cria uma string com o nome completo do autor
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
}

// 3.1 => Essa função faz uma chegagem do que a função recebe
const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;

  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const Author = require('../models/Author');

// 3.2 => Essa função vai fazer uma comunicação com a camada de model
// Gera um novo autor
const getAll = async () => {
  const authors = await Author.getAll();
  return authors.map(getNewAuthor)
}

// 3.3 => retorna um autor, conforme o id passado na função
const findById = async (id) => {
  const author = Author.findById(id);
  return getNewAuthor(author);
}

// 3.4 => essa função conecta com o CREATE
const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);
  // Para criar tem que fazer uma validação
  if(!authorValid) return false;
  await Author.create(first_name, middle_name, last_name);
  return true;
}

module.exports = {
  getAll,
  findById,
  create,
};