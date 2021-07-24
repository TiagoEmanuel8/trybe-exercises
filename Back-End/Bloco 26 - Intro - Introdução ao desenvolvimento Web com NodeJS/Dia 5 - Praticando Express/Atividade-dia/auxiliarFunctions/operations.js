const operations = (operation, num1, num2) => {
  switch (operation) {
    case 'soma':
      return num1 + num2;
    case 'subtracao':
      return num1 - num2;
    case 'multiplicacao':
      return num1 * num2;
    case 'divisao':
      return num1 / num2;
    default:
      return;
  };
};

module.exports = operations;

