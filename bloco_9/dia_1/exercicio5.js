const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
// 2 - a função é recebida como uma callback
const sendMarsTemperature = (onSuccess) => {
    const temperatureMars = getMarsTemperature();
    //3 - além da mensagem da callback estou inserindo dados dentro da função, nesse caso inserindo temperatura dentro da mensagem das funções recebidas
    setTimeout(() => onSuccess(temperatureMars), messageDelay());
};

// 1 - tudo inicia aqui, chamada das funções
sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);