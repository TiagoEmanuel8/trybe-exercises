const catModel = require('../models/catModel');

// 1.3 - função normal que faz o getAll e se relaciona com a model
const getAll = async (_req, res) => {
  try {
    const cats = await catModel.getAll();
    // 1.4 - esse render tem 2 parametros render(arquivo ejs, mensagem + array de dados)
    res.render('getAll', { message: "Hello World", cats });
  } catch (err) {
    console.error(err);
    // 1.5 - caso dê erro só mando renderizar esse componente
    res.status(500).render('generalError');
  }
}

// 2.4 - O botão submit do front dispara aqui
const create = async (req, res) => {
  const { name, age } = req.body; // 2.5 - Dados passados pelo campo name do forms
  
  console.log(name, age);
  
  // 2.6 - Faz uma verificação simples
  if (typeof name !== 'string' || name.length < 3 || name.length >= 30) {
    return res.status(400).render('error', { error: 'O nome digitado não é válido!'})
  }
  
  try {
    // 2.7 - já disparo a função de criar para a model
    await catModel.create(name, age)
    // 2.8 - Já renderizo o componente created + msg de sucesso
    res.render('created', { message: 'Gato cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    // 2.9 - caso dê erro só mando renderizar esse componente
    res.status(500).render('errorCat');
  }
}

// 3 - listar por ID, disparada pelo click do link nas listas
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    // 3.1 - Já chamo a função na model
    const cat = await catModel.getById(id);

    // 3.2 - Se não tiver o gato registrado, vai dar um erro
    if (!cat) {
      return res.status(404).render('notFound'); // 3.3 - manda o erro pro ejs
    }

    // 3.4 - desestrutura o array cat pra mandar pra o ejs getCatById
    const { name, age } = cat;
    
    // 3.5 - ja vai renderizar para o componente getById, passando os dados
    return res.status(200).render('getCatById', { id, name, age });
    
  } catch (error) {
    console.error(error);
    res.status(500).render('generalError'); // 3.6 - manda o erro pro ejs
  }
}

module.exports = {
  getAll,
  create,
  getById,
}