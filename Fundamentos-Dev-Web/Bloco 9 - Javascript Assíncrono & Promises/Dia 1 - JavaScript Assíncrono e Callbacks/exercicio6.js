const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);
//o 2º parâmetro é o de erro
const sendMarsTemperature = (onSuccess, onError) => {
    const currentTemperature = getMarsTemperature();
    //taxa de sucesso que o enunciado pediu
    const sucess = Math.random() <= 0.6;
    //fazer uma comparação onde IF o acerto seja igual ou maior que 60% joga a mensagem de acerto e caso contrário o erro seja tratado no 'else'
    setTimeout(() => {(sucess) ? onSuccess(currentTemperature) : onError('Robô ocupado')}, messageDelay());
  }
// 1 - tudo inicia aqui, invocando as funções - sucesso(da a temperatura) e erro (joga uma mensagem)
sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);