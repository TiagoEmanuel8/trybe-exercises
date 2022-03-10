import { User, InputUser } from '../interfaces/User';
import userModel from '../models/User';

const getAll = async (): Promise<User[]> => {
  const users = await userModel.getAll();
  return users as User[]; // forma de conversão
};

const create = async (user: InputUser): Promise<User[]> => {
  const { username, email, password } = user
  const userCreated = await userModel.create({ username, email, password })
  return userCreated;
};

export default {
  getAll, create
};
