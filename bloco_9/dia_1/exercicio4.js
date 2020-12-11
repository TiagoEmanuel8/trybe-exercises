// essa função retorna a mensagem já com o delay
const messageDelay = () => Math.floor(Math.random() * 5000);
// essa função retorna a temperatura
const getMarsTemperature = () => { 
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
 const temperature = getMarsTemperature();
    setTimeout(() => console.log(`A temperatura em marte é de ${temperature} graus celsius`), messageDelay());
};

sendMarsTemperature(); 