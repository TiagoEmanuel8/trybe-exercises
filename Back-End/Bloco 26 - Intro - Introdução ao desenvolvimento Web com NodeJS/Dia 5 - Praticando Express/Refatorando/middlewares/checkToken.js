const checkToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  const tokenRegexCheck = /^\w{12}/i;

  if(!token || tokenRegexCheck.test(token)) {
    return res.status(401).json({ message: "Invalid Token" })
  };
  next();
};

module.exports = checkToken;