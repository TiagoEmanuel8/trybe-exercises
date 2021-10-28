const authorModel = require('../Model/authorModel');

// 2 - chamo a model
const listAuthors = async (_req, res) => {
  const authors = await authorModel.findAllAuthors();
  // return res.status(200).json(authors); // 4 - o retorno para o insomnia ou thunder
  return res.status(200).render('authors/index', { authors }); // 4 - o metodo render() manda a resposta para a view
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await authorModel.findById(id);

  if (!author) return res.status(404).render('404');

  res.status(200).render('authors/show', { author });
};

// 6.2 - chama a rota do forms,
const newAuthor = (req, res) => {
  res.render('authors/new', { message: null }); // especificamente ja mostra a nova página
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  // verificação só para ver se os 3 campos estão preenchidos
  if (!Author.isValid(first_name, middle_name, last_name)) {
    // caso nao estejam preenchidos vai disparar a msg de erro
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  // aqui cria o autor no BD
  await Author.create(first_name, middle_name, last_name);
    // após o cadastro é redirecionado para a pagina principal
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
}