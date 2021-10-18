const { Product, User } = require('../models');

const getAll = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

// EAGER LOADING
// observar esse include vai trazer os dados de vez
const getById = (req, res) => {
  Product.findByPk(req.params.id,
    { include: { model: User, as: 'user', attributes: { exclude: ['password'] } } // esse alias user tem que ser igual ao nome do model
  })
    .then((product) => {
      if (product === null) {
        return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      res.status(200).json(product);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

// LAZY LOADING
// const getById = (req, res) => {
//   Product.findByPk(req.params.id)
//     .then(async (product) => {
//       if (product === null) {
//         return res.status(404).send({ message: 'Usuário não encontrado' });
//       }
//       // começa aqui o lazy
//       const user = await product.getUser(); // pego os dados de user
//       res.status(200).json({ ...product.dataValues, user }); // joga os dados de produto + user
//     })
//     .catch((e) => {
//       console.log(e.message);
//       res.status(500).json({ message: 'Algo deu errado' });
//     });
// };

const create = (req, res) => {
  const { name, username, email, password, userId } = req.body;

  Product.create({ name, username, email, password, userId })
    .then((newUser) => {
      // Separamos a senha do restante do objeto, para que ela não seja retornada na API
      const { id, name, username, email, createdAt, userId, updatedAt } = newUser;

      res.status(200).json({ id, name, username, email, userId, createdAt, updatedAt });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
};




module.exports = {
  getAll,
  getById,
  create,
};