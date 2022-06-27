import {
  DataSnapshot,
  onValue,
  push,
  ref,
  remove,
  set
} from 'firebase/database';
import { toast } from 'react-toastify';

import { database } from '../config/firebase';
import Item, { ItemCategory, ItemFields } from '../interfaces/Item';

export const createItem = async (value: ItemFields) => {
  try {
    const item = {
      createdAt: Date.now(),
      ...value
    }

    const pathRef = ref(database, `items/${value.category}`)

    await push(pathRef, item);

  } catch (err) {
    console.error(err);
    toast('Something went wrong!');
  }
}

export const getItems = (
  category: ItemCategory,
  cb: (snap: DataSnapshot) => void
) => {
  const pathRef = ref(database, `items/${category}`);
  return onValue(pathRef, cb);
}

export const updateItem = async (
  id: string,
  value: ItemFields
) => {
  try {
    const pathRef = ref(database, `items/${value.category}/${id}`);

    await set(pathRef, value);

  } catch (err) {
    console.error(err);
    toast('Something went wrong!');
  }
}

export const deleteItem = async (item: Item) => {
  try {
    const pathRef = ref(database, `items/${item.category}/${item.id}`);

    await remove(pathRef);

  } catch (err) {
    console.error(err);
    toast('Something went wrong!');
  }
}