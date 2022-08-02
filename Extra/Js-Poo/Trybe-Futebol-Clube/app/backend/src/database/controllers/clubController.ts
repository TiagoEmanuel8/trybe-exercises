import { Request, Response } from 'express';
import clubService from '../services/clubService';

const allClubs = async (req: Request, res: Response) => {
  const clubs = await clubService.allClubs();

  return res.status(200).json(clubs);
};

const clubById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const club = await clubService.clubById(id);

  return res.status(200).json(club);
};

export default {
  allClubs,
  clubById,
};
