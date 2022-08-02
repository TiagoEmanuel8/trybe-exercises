import * as express from 'express';
import controller from '../database/controllers/leaderboard';

const leader = express.Router();

leader
  .route('/leaderboard/home')
  .get(controller.leaderBoardHome);

leader
  .route('/leaderboard/away')
  .get(controller.leaderBoardAway);

export default leader;
