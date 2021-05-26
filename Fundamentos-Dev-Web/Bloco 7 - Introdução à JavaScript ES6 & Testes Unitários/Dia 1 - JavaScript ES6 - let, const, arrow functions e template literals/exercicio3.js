//Lógica de calcular fatorial
const order = (number) => {
    let multiplier = number;
  if (number > 0) {
        let multiplier = 1;
        for (let index = number; index > 0; index -= 1) {
            multiplier *= index
        }
      return multiplier;
    } else {
        return ` O número ${multiplier} é menor ou igual que 0, tente usar um número positivo`
    }
}
console.log(order(5));