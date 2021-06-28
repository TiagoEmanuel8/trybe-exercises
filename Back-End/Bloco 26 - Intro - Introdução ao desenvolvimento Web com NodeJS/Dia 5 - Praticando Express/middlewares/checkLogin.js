const checkLogin = (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password) {
    return res.status(400).json({
      message: "Missing information"
    });
  };

  const passwordRegexCheck = /^\d{4,8}/i;

  if (!passwordRegexCheck.test(password)) {
    return res.status(400).json({
      message: "Password is invalid"
    });
  };

  const emailRegexCheck = /^([\w./+-]+)@([\w-]+\.)+([\w]{2,})$/i;

  if (!emailRegexCheck.test(email)) {
    return res.status(400).json({
      pessage: "email is invalid"
    });
  };

  next();
};

module.exports = checkLogin;
