const validaOperacao = (req, res, next) => {
  const { operacao } = req.params;
  
  const operacoes = [
    'soma',
    'subtracao',
    'multiplicacao',
    'divisao'
  ];

  if(!operacoes.includes(operacao)) {
    return res.status(406).json({
      message: "operacao invalida"
    })
  };

  next();
};

module.exports = validaOperacao;
