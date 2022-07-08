import './sass/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Item from './interfaces/Item';
import { deleteItem } from './services/item';
import { dishes } from './constants';

import Confirm from './components/Confirm';
import Dish from './components/Dish';
import Navbar from './components/Navbar';
import { EditItem, NewItem } from './components/Item';

const App: React.FC = () => {
  const [showNewItem, setShowNewItem] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  console.log('Test');
  const handleEdit = (item: Item) => {
    setSelectedItem(item);
    setShowEditItem(true);
  }

  const handleDelete = (item: Item) => {
    setSelectedItem(item);
    setShowConfirm(true);
  }

  const confirmDelete = () => {
    if (!selectedItem) return;
    deleteItem(selectedItem);
    setShowConfirm(false);
    setSelectedItem(null);
    toast('Successfuly deleted!');
  }

  return (
    <section>
      <NewItem
        onClose={() => setShowNewItem(false)}
        visible={showNewItem}
      />

      <EditItem
        item={selectedItem}
        onClose={() => setShowEditItem(false)}
        visible={showEditItem}
      />

      <Confirm
        description='Are you sure?'
        onClose={() => setShowConfirm(false)}
        onConfirm={confirmDelete}
        title='Delete Item'
        visible={showConfirm}
      />

      <Navbar onButtonClick={() => setShowNewItem(true)} />

      <div className='dish__container'>
        {dishes.map(dish => (
          <Dish
            category={dish.category}
            key={dish.title}
            onDelete={handleDelete}
            onEdit={handleEdit}
            title={dish.title}
          />
        ))}
      </div>

      <ToastContainer
        autoClose={1000}
      />
    </section>
  );
}

export default App;