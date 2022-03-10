export interface InputUser {
  username: string,
  password: string,
  email: string,
}

export interface User extends InputUser {
  id: number,
}