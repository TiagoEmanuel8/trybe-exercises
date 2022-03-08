import { IUser } from './models/IUser';
import UserModel from './models/User';

const main = async () => {
  // Buscar todos os usuários
  const users = await UserModel.getAll();
  console.log(users);

  // Buscar um usuário por id
  const userFound = await UserModel.getById(5);
  console.log(userFound);

  // cadastrar um usuário
  const user: IUser = {
    username: 'renato_filho',
    email: 'renatosousafilho@betrybe.com',
    password: 'pwd12345'
  }

  const newUser = await UserModel.create(user);
  console.log(newUser);

  // atualizar um usuário
  const updatedUser = await UserModel.update(5, user);
  console.log(updatedUser);

  // remover um usuário
  await UserModel.remove(5);
  console.log('usuário removido!')
}

main();