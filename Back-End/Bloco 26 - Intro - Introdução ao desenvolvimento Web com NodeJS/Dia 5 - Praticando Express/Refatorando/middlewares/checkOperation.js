const checkoperation = (req, res, next) => {
  const { operacao } = req.params;
  const operacaoArray = [ 'soma', 'subtracao', 'multiplicacao', 'divisao' ];
  if(!operacaoArray.includes(operacao)) {
    return res.status(406).json({ message: "operação inválida" })
  };
  next();
};

module.exports = checkoperation;
