export interface IUser {
  username: string,
  email: string,
  password: string,
};

export interface User extends IUser {
  id: number
}