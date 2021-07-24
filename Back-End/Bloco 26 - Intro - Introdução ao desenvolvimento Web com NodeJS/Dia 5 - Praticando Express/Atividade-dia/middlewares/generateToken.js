const crypto = require('crypto');

const generateToken = (_req, res) => {
  const token = crypto.randomBytes(6).toString('hex').toUpperCase();

  res.status(200).json({
    token,
  });
};

module.exports = generateToken;
