const connection = require('./connection');

const getAll = async () => {
  connection()
    .then((db) => db.collection('books').find().toArray())
    .then((book) => {
      return book.map(({_id, title, author_id}) => {
       return getNewBook({
         id: _id, title, author_id
       })
      });
    });
};

const getByAuthorId = async () => {};

module.exports = { getAll, getByAuthorId };