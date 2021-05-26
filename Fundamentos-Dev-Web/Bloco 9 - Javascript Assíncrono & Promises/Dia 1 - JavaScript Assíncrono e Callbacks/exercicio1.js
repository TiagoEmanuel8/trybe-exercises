// vale destacar essa forma de escrever subpropriedades de um objeto, dentro de uma função, bastante interessante
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};
//a função será exibida exatamente nessa orde que foi chamada
console.log(planetDistanceFromSun(mars));
console.log(planetDistanceFromSun(venus));
console.log(planetDistanceFromSun(jupiter));