const connection = require('./connection');
// const rescue = require('express-rescue');

const getByCep = async(cepId) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep=?';
  const [cep] = await connection.execute(query, [cepId]);
  return cep.map(({ cep, logradouro, bairro, localidade, uf }) => ({ cep, logradouro, bairro, localidade, uf }));
};

module.exports = { getByCep };
