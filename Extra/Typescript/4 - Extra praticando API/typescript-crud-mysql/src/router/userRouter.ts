import { Router } from 'express';

import userController from '../controllers/userController';

const router = Router();

router.get('/', userController.getAll);

router.post('/', userController.create);

export default router;
