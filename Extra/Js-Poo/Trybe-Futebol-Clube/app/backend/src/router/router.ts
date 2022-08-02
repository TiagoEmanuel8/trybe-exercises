import * as express from 'express';
import loginService from '../database/services/loginService';
import userLogin from '../database/controllers/loginController';

const router = express.Router();

router
  .route('/login')
  .post(
    loginService.validateEmail,
    loginService.validatePassword,
    userLogin,
  );

router
  .route('/login/validate')
  .get(loginService.tokenValid);

export default router;
