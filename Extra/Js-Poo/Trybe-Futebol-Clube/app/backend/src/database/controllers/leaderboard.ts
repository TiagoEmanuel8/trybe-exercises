import { Request, Response } from 'express';
import createLeaderboard from '../services/leaderBoardHome';
import createLeaderboardAway from '../services/leaderBoardAway';

const leaderBoardHome = async (_req: Request, res: Response) => {
  const leaderBoardComplete = await createLeaderboard();

  return res.status(200).json(leaderBoardComplete);
};

const leaderBoardAway = async (_req: Request, res: Response) => {
  const leaderBoardComplete = await createLeaderboardAway();

  return res.status(200).json(leaderBoardComplete);
};

export default {
  leaderBoardHome,
  leaderBoardAway,
};
