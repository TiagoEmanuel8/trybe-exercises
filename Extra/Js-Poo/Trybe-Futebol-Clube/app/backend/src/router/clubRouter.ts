import * as express from 'express';
import clubController from '../database/controllers/clubController';

const club = express.Router();

club
  .route('/clubs')
  .get(clubController.allClubs);

club
  .route('/clubs/:id')
  .get(clubController.clubById);

export default club;
