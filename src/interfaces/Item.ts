export type ItemCategory = 'main' | 'side' | 'beverage' | 'extra';

export interface ItemFields {
  category: ItemCategory;
  cost: number;
  name: string;
  options?: string[];
  price: number;
  stock: number;
}

export default interface Item extends ItemFields {
  createdAt: number;
  id: string;
}