import { Router } from 'express';
import { createRestaurant, validateRestaurant } from '../controllers';

const router = Router();

router.post('/', validateRestaurant, createRestaurant);

export default router;
