import { writeFile } from 'fs/promises';
import { v4 as uuid } from 'uuid';
import { Restaurant } from '../types/restaurant';

export const create = async (restaurant: Restaurant) => {
  restaurant.id = uuid();

  await writeFile(`./data/${restaurant.id}.json`, JSON.stringify(restaurant), {encoding: 'utf-8'})

  return restaurant;
}