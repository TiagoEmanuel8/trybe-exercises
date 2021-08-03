const rescue = require('express-rescue');

const checkNewUser = rescue(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  
  if (! firstName || !lastName) return res.status(400).json({ message: 'campo "firstName" e "lastName" são obrigatórios'});

  if(!email) return res.status(400).json({ message: 'o campo "email" é obrigatório' })

  if(!password) return res.status(400).json({ message: 'O campo "passoword é de preenchimento obrigatório" '});

  if(password.length < 6) return res.status(400).json({ message: "password deve conter 6 caracteres"});

  next();
});

module.exports = {checkNewUser};