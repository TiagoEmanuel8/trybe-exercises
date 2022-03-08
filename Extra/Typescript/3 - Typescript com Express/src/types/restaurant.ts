export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  opens: number;
  close: number;
}

export type RestaurantStatus = (restaurant: Restaurant, date?: Date) => boolean;