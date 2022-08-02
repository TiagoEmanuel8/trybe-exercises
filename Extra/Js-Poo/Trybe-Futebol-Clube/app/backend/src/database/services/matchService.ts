import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import { Payload } from '../interface/ILogin';
import Clubs from '../models/club';
import Matchs from '../models/match';

/** Ref: https://sequelize.org/master/manual/eager-loading.html
 * options.include[].model.attributes
*/
const getAllMatchs = async () => {
  const getAll = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] } },
      { model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] } },
    ],
  });

  return getAll;
};

// função para filtrar as partidas em progresso
const getInProgress = async (inProgress: string) => {
  const progress = inProgress === 'true';
  const matchs = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
    ],
    where: { inProgress: progress },
  });

  return matchs;
};

const teamById = async (id: number) => {
  const team = await Clubs.findByPk(id);
  return team;
};

// função para criar uma nova partida
const createMatch = async (newMatch: Matchs) => {
  const create = await Matchs.create(newMatch);

  return {
    id: create.id,
    homeTeam: create.homeTeam,
    homeTeamGoals: create.homeTeamGoals,
    awayTeam: create.awayTeam,
    awayTeamGoals: create.awayTeamGoals,
    inProgress: create.inProgress,
  };
};

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8', flag: 'r' });

const tokenValid = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(token, secret);

    const { email } = decoded as Payload;

    req.body.email = email;

    next();
  } catch (error) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

const finishedMatch = async (id: number) => {
  const updateStatus = await Matchs.update({ inProgress: false }, { where: { id } });
  return updateStatus;
};

const updateGoals = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
  const updatingGoals = await Matchs.update(
    { homeTeamGoals, awayTeamGoals },
    { where: { id, inProgress: true } }, // partidas em andamento, somente
  );
  return updatingGoals;
};

export default {
  getAllMatchs,
  getInProgress,
  teamById,
  createMatch,
  tokenValid,
  finishedMatch,
  updateGoals,
};
