import * as express from 'express';
import matchController from '../database/controllers/matchController';
import matchService from '../database/services/matchService';

const match = express.Router();

match
  .route('/matchs')
  .get(matchController.getAll)
  .post(matchService.tokenValid, matchController.createMatch);

match
  .route('/matchs/:id')
  .patch(matchController.updateGoals);

match
  .route('/matchs/:id/finish')
  .patch(matchController.finishedMatch);

export default match;
