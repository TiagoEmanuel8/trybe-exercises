const checkToken = (req, res, next) => {
  const { authorization: token } = req.headers; // renomeando a chave authorization para token
  const tokenRegexCheck = /^\w{12}/i;
  // console.log(token);
  if(!token || tokenRegexCheck.test(token)) {
    return res.status(401).json({ message: "Invalid Token" })
  };
  next();
};

module.exports = checkToken;