import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import loginService from '../services/loginService';
import { ILogin } from '../interface/ILogin';

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8', flag: 'r' });

const userLogin = async (req: Request, res: Response) => {
  const { email, password }: ILogin = req.body;

  const users = await loginService.userLogin(email);
  const { role } = users;

  const crypt = bcrypt.compareSync(password, users.password);
  if (!crypt) return res.status(401).json({ message: 'Email or password is invalid' });

  const token = jwt.sign({ email, role }, secret, { algorithm: 'HS256' });

  const user = {
    id: users.id,
    username: users.username,
    role: users.role,
    email: users.email,
  };

  return res.status(200).json({ user, token });
};

export default userLogin;
