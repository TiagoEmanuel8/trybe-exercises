export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  opens: number;
  close: number;
}

export type RestaurantStatus = (restaurant: Restaurant, date?: Date) => boolean;