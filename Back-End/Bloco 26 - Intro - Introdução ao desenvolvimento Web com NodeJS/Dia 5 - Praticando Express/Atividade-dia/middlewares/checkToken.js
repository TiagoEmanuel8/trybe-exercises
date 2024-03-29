const checkToken = (req, res, next) => {
  const tokenRegexCheck = /^\w{12}/i;

  const { authorization: token } = req.headers; // forma de renomear a chave authorization para token

  console.log(token);
  
  if(!token || !tokenRegexCheck.test(token)) {
    return res.status(401).json({
      message: "invalid Token"
    })
  };

  next();
};

module.exports = checkToken;
