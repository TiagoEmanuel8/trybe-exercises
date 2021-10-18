const { Selloff, Product } = require('../models');


const getAll = async  (req, res, next) => {
  Selloff.findAll()
    .then((selloffs) => {
      res.status(200).json(selloffs);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

const getById = async  (req, res, next) => {
  Selloff.findByPk(req.params.id,
    // adicionar depois de fazer o model SelloffProducts
    { include: { model: Product, as: 'products', through: { attributes: [] } } }  
  )
    .then((selloff) => {
      if (selloff === null) {
        return res.status(404).send({ message: 'Liquidação não encontrada' });
      }

      return res.status(200).json(selloff);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

const create = async (req, res) => {
  const { name, discount, startDate, endDate } = req.body;

  const start = new Date(startDate);
  const end = new Date(endDate);

  Selloff.create({ name, discount, startDate: start, endDate: end })
    .then((newSelloff) => {
      res.status(200).json(newSelloff);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
};

const update = async  (req, res) => {
  const { name, discount, startDate, endDate } = req.body;

  Selloff.update(
    { name, discount, startDate, endDate },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((selloffs) => {
      res.status(200).send({ message: 'Liquidação atualizada com sucesso.' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
};

const remove = async  (req, res) => {
  Selloff.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((selloffs) => {
      res.status(200).send({ message: 'Liquidação excluída com sucesso.' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
};

const addProductsInSelloff = async (req, res) => {
  try {
    const { productIds } = req.body;

    const selloff = await Selloff.findByPk(req.params.id);

    if (!selloff) {
      return res.status(404).send({ message: 'Liquidação não encontrada' });
    }

    const products = await Product.findAll({
      where: { id: productIds },
    });

    await selloff.addProducts(products);

    res.status(200).json({ message: 'Produtos adicionados com sucesso' });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: 'Algo deu errado' });
  }
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  addProductsInSelloff,
};
