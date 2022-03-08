// define apenas o contrato - mas nao define comportamento
// util para herança

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
};

interface Teacher extends Employee {
  // esses campos podem ser omitidos porque foi uma extensão
  // firstName: string;
  // lastName: string;
  // subject: string;
  fullName(): string;
  sayHello(): string;
};
