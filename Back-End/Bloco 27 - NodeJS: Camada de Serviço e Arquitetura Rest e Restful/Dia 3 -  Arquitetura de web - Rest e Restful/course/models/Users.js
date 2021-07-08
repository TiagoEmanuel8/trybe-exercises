// simulando um BD local que NÃO existe
const users = require('../data/users.json');
// Função que retorna tudos os usuários
const getAll = () => {
  return users
}

module.exports = { getAll };