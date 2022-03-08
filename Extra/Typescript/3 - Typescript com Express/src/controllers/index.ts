import { NextFunction, Request, Response } from 'express';
import { Restaurant } from '../types/restaurant';

// criar o tipo, para o for of - tipa o index
type RestaurantKey = keyof Restaurant;

export const validateRestaurant = (req: Request, res: Response, next: NextFunction) => {
  // confere os tipos de body
  const restaurant: Restaurant = req.body;
  // validar campos que chegam no req.body DINAMICAMENTE
  const requiredProperties: RestaurantKey[] = [
    "name", "cuisine", "opens", "close"
  ]
  for (const property of requiredProperties) {
    if (!restaurant[property]) {
      return next({ message: `não tem ${property}` })
    }
  }

  if (restaurant.name.length < 3 || restaurant.cuisine.length < 3) {
    return next({ message: `nome ou culinária precisam ter 3 ou mais caracteres` })
  }

  next();
};

export const createRestaurant = (req: Request, res: Response) => res.status(201).json([]);