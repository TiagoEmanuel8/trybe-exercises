// tipando o parametro da função
type UserType = {
  name: string,
  email: string,
  // password: 'string'
}

// tipo a função
const displayData = (user: UserType) => {
  return `Nome: ${user.name}, Email: ${user.email}`;
}

//usuario 1 - tudo ok
const user1: UserType = { name: 'tiago', email: 'tiago@email.com' };
displayData(user1);

//usuario 1 - vai quebrar pq falta o email
// const user2: UserType = { name: 'tiago' };
// displayData(user1);