const User = require('./user.json');

interface IUser {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string,
}

class UserMock {
  constructor( public users: IUser[] ) {}

  public login (email: string, password: string) {
    const findUser = this.users.find((user) => {
      user.email === email && user.password === password;
    })
    if (findUser) {
      return true;
    }
  }
};

const userMock = new UserMock(User);

const oneUser = {
  findOne: async (email: string, password: string) => {userMock.login(email, password);},
}

export { 
  oneUser
};

// Conteúdo do bloco 24.4
// const mockCreate = (Instance, data) => {
//   if(!data){
//     return;
//   }

//   const newData = data;
//   if(!!Instance[0].id) {
//     newData.id = Date.now();
//   }
//   Instance.push(newData);
//   return newData;
// };

// const User = {
//   create: async (data) => mockCreate(Users, data),
//   findAll: async () => Users,
// };