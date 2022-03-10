import { Request, Response } from 'express';
import userServices from '../services/userServices';

const getAll = async (req: Request, res: Response) => {
  const users = await userServices.getAll();
  return res.status(200).json(users);
};

const create = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await userServices.create({ username, email, password })
  return res.status(201).json(user);
};

export default {
  getAll, create
};
