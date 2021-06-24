const obj = [
  {
    cuidado: {
      id: 12,
      infos: [
        {
          sofini: { iha: { issoAquiPodeVariar: ["a", "e", "i", "o", "u"] } },
          texto: "Oi",
          bandas: {
            metallica: "Sim",
            tunicoEtinoco: "sim",
            ramones: "SiM"
          }
        },
        {
          sofni: false,
          texto: "Olá",
          soPraAtrapalhar: {
            issoAquiNaoAJudaEmNAda: [false, true, true, false]
          }
        }
      ],
      casas: {
        uf: {
          txt: "sp",
          txt4: "I beleave i can fly",
          txt2: "Uk"
        },
        rua: {
          logradouro: {
            saoPaulo: "cidadeGrande",
            cep: {
              digitos: {
                numeros: [
                  5,
                  -4,
                  4,
                  true,
                  3,
                  "ds",
                  /dasda/g,
                  false,
                  0,
                  undefined
                ],
                toAquiSoPraAtrapalhartambem: {
                  vqv: true
                },
                bairro: [{ naoSei: "SeiTudo" }]
              },
              qualquercoisa: false
            }
          }
        }
      },
      naoUseEsse: [132, 125, 31, 74, -124, 5742, null]
    }
  }
];

/*
Resolva esse exercício com promise
Dado o objeto complexo no formato abaixo, retire os dois arrays e junte-os somente se ambos possuírem pelo menos 4 elementos numéricos. 
Caso essa condição não seja satisfeita, a promise deverá ser rejeitada.
Caso contrário, some os valores e resolva a promise com o resultado dessa soma.
*/

/*
- Separar os arrays do objeto complexo ✔️
- Separar os elementos numéricos dos arrays ✔️
- Verificar a quantidade de elementos de cada arrays - rejeitar de acordo com a verificação ✔️
- Juntar os arrays 
- Somar os valores dos elementos dos arrays e resolver a promise
 */

const filterArrayFunc = (array) => {
  const filteredArray = array.filter((element) => typeof element === "number");
  return filteredArray;
};

const filterNumbers = (objeto) => {
  const firstArray = objeto[0].cuidado.casas.rua.logradouro.cep.digitos.numeros;
  const secondArray = objeto[0].cuidado.naoUseEsse;
  // let juncao = firstArray.concat(secondArray);

  // let juncao  = juncao.filter((item) => typeof item === "number");

  // console.log("junção", juncao);

  // const firstArrayFiltered = firstArray.filter(
  //   (item) => typeof item === "number"
  // );
  // console.log("filtered", firstArrayFiltered);

  // const secondArrayFiltered = secondArray.filter(
  //   (item) => typeof item === "number"
  // );

  // console.log("filtered", secondArrayFiltered);

  const array1 = filterArrayFunc(firstArray);
  const array2 = filterArrayFunc(secondArray);

  return new Promise((resolve, reject) => {
    if (array1.length < 4 || array2.length < 4)
      reject(Error("Array menor que 4"));

    const result = array1.concat(array2);
    resolve(result);
  });
};

filterNumbers(obj).then((res) => console.log);

const verificaArray = (objeto) => {
  const promise = new Promise((resolve, reject) => {
    if (firstArray.length < 4 || secondArray.length < 4)
      reject(Error("Um dos arrays não possuem mais de 4 elementos"));
    const firstArray =
      objeto[0].cuidado.casas.rua.logradouro.cep.digitos.numeros;
    const secondArray = objeto[0].cuidado.naoUseEsse;
    let juncao = firstArray.concat(secondArray);
    juncao = juncao.filter((item) => typeof item === "number");
    resolve(juncao);
  });
  return promise;
};

const minhaVerificação = async (objeto) => {
  try {
    const verificado = await verificaArray(objeto);
    console.log(verificado);
  } catch (err) {
    console.log(err.message);
  }
};
console.log(minhaVerificação(obj));


 // KISS
console.log(obj[0].cuidado.casas.rua.logradouro.cep.digitos.numeros);
console.log(obj[0].cuidado.naoUseEsse);
