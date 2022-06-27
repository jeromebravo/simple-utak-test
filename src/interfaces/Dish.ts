import { ItemCategory } from './Item';

export type DishTitle = 'Main Dishes' | 'Side Dishes' | 'Beverages' | 'Extras';

export default interface Dish {
  category: ItemCategory;
  title: DishTitle;
}