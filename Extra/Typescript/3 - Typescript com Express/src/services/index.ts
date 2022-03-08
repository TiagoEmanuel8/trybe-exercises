import * as RestaurantModel from '../models/restaurant';
import { Restaurant } from '../types/restaurant';

export const createRestaurant = (restaurant: Restaurant) => RestaurantModel.create(restaurant);
