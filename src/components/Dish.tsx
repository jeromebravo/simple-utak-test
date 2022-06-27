import { useEffect, useState } from 'react';

import Item, { ItemCategory } from '../interfaces/Item';
import { getItems } from '../services/item';

import { List, ListItem } from './List';

interface DishProps {
  category: ItemCategory;
  onDelete: (item: Item) => void;
  onEdit: (item: Item) => void;
  title: string;
}

const Dish: React.FC<DishProps> = ({
  category,
  onDelete,
  onEdit,
  title
}) => {
  const [items, setItems] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getItems(category, snap => {
      const items: Item[] = [];

      snap.forEach(item => {
        items.push({ id: item.key, ...item.val() });
      });

      setItems(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className='dish'>
      <h2>{title}</h2>
      {items && items.length > 0 && (
        <List>
          {items.map(item => <ListItem
            key={item.id}
            item={item}
            onDelete={() => onDelete(item)}
            onEdit={() => onEdit(item)}
          />)}
        </List>
      )}

      {items && items.length === 0 && !loading && (
        <p>No {title}</p>
      )}

      {loading && (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default Dish;