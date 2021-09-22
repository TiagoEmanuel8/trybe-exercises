const { default: axios } = require('axios');

// async function validaeconsultaCEP() {
//   const cep = '46.860-000';

//   const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
//   const valida = regexCEP.test(cep);

//   let cepTratado;
//   if (valida) {
//     cepTratado = cep.replace(/[^\d]+/g, '');
//     const URL = 'https://brasilapi.com.br/api/cep/v1/${cepTratado}';

//     const request = await axios.get(URL);
//     console.log(request.data);
//   }

// };

// validaeconsultaCEP();

// para aplicar o S - Solid vou deixar a função com apenas 1 coisa

// async function consultaCEP() {
//   const cep = '46.860-000';
//   const valida = validaCEP(cep);

//   let cepTratado;
//   if (valida) {
//     cepTratado = cep.replace(/[^\d]+/g, '');
//     const URL = 'https://brasilapi.com.br/api/cep/v1/${cepTratado}';

//     const request = await axios.get(URL);
//     console.log(request.data);
//   }

// };

// function validaCEP(cep) {
//   const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
//   return regexCEP.test(cep);
// }

// consultaCEP();

//----------------------------------------------------

// O - sOlid => não mexer no que está pronto, mas modificar por fora

// aqui vou adicionar todas as cidades que precisar, sem alterar a cidade
// const CIDADES = {
//   iacu: { cep: '46.860-000' },
//   itaberaba: { cep: '46.880-000' },
//   salvador: { cep: '41.880-000' },
//   brasilia: { cep: '56.880-000' },
// };

// async function consultaCEP(cidade) {
//   // aqui vou tratar as cidades
//   const { cep } = CIDADES[`${cidade}`];

//   const valida = validaCEP(cep);

//   let cepTratado;
//   if (valida) {
//     cepTratado = cep.replace(/[^\d]+/g, '');
//     const URL = 'https://brasilapi.com.br/api/cep/v1/${cepTratado}';

//     const request = await axios.get(URL);
//     console.log(request.data);
//   }

// };

// function validaCEP(cep) {
//   const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
//   return regexCEP.test(cep);
// }

// consultaCEP('itaberaba'); => !==

//------------------------------------------------- !== => ->

// D - soliD - inversão de dependencia
// no exemplo abaixo quero usar 2 apis

const CIDADES = {
  iacu: { cep: '46.860-000' },
  itaberaba: { cep: '46.880-000' },
  salvador: { cep: '41.880-000' },
  brasilia: { cep: '56.880-000' },
};

async function consultaCEP(cidade, service) {
  const { cep } = CIDADES[`${cidade}`];

  const valida = validaCEP(cep);

  let cepTratado;
  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, '');
    service(cepTratado);
  }

};

async function brasilAPI(cep) {
  const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;
  const request = await axios.get(URL);
  console.log(request.data);
};

async function viaCEP(cep) {
  const URL = `https://viacep.com.br/ws/${cep}/v1/${cepTratado}`;
  const request = await axios.get(URL);
  console.log(request.data);
};

function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  return regexCEP.test(cep);
}

consultaCEP('itaberaba', viaCEP);