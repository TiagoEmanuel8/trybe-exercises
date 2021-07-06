const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT title FROM model_example.books';
  const [books] = await connection.execute(query);
  return books;
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?';
  const [book] = await connection.execute(query, [authorId]);
  return book.map(({ id, title, author_id}) => ({ id, title, authorId: author_id }));
};

const isValid = (title, authorId) => {
  if(!title || typeof title !== 'string' || title.length > 3) return false;
  if(!authorId || typeof title !== 'number') return false;
  return true;
};

const create = async(title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';
  connection.execute(query, [title, authorId]);
};

module.exports = { getAll, getByAuthorId, create, isValid };
