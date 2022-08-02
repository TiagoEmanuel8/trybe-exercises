export interface ILogin {
  email: string;
  password: string;
}

export interface IUser extends ILogin {
  id: number;
  username: string;
  role: string;
}

export interface Payload {
  email: string
  role: string,
  iat: number,
}
