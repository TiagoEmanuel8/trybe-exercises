// 1
const mysql = require('mysql2/promise')
// 2 - O user + senha serão de acordo com minhas configs do BD
// createPool => vai manter a conexão com o BD aberta
const connection = mysql.createPool({
    host: 'localhost',
    user: 'tiago', 
    password: 'BreakingBad123.',
    database: 'cartoons'
})

// MySql - Update(Crud) => query que retorna tudo do BD
const getAll = async () => {
  const [characters] = await connection.execute('SELECT * FROM cartoons.characters');
  return characters;
}
// MySql - Read(Crud) =>  Vai receber id de fora, e comparar com o BD
const findOne = async (id) => {
  const [character] = await connection.execute(
    // Sempre que tiver esse caso usar o '?' por infoseg
    'SELECT * FROM cartoons.characters WHERE id=?', [id])

  return character;
}
// MySql - Create(Crud) => query para inserir personagem
const create = async (name, cartoon) => {
  const [character] = await connection.execute(
    'INSERT INTO cartoons.characters (name, cartoon) VALUES (?, ?)', [name, cartoon])
  // formatação para exibir id, nome e cartoon
  const result = {
    id: character.insertId,
    name,
    cartoon
  }

  return result; 
}

// MySql - Update(Crud) => query que edita um dado no BD, a partir de um ID existente
const edit = async (id, name, cartoon) => {
  await connection.execute(
    'UPDATE cartoons.characters SET name=?, cartoon=? WHERE id=?', [name, cartoon, id])
  
  const result = {
    id,
    name,
    cartoon
  }

  return result;
}

// MySql - Delete(Crud) => query que deleta algo do BD a partir do BD
const exclude = async (id) => {
  await connection.execute('DELETE FROM cartoons.characters WHERE id=?', [id])

  return null
}

module.exports = { 
  getAll,
  findOne,
  create,
  edit,
  exclude
}