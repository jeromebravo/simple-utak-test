import Item from '../../interfaces/Item';
import { IoPencil, IoTrashOutline } from 'react-icons/io5';

import Button from '../Button';

interface ListItemProps {
  item: Item;
  onEdit: () => void;
  onDelete: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  onEdit,
  onDelete
}) => (
  <div className='list__item'>
    <div>
      <p>Name: {item.name}</p>
      <p>Price: ₱{item.price}</p>
      <p>Cost: ₱{item.cost}</p>
      <p>Stock: {item.stock}</p>
      {item.options && (
        <p>Options: {item.options.join(', ')}</p>
      )}
    </div>

    <div className='list__item-options'>
      <Button
        Icon={IoPencil}
        onClick={onEdit}
        size='sm'
        variant='outline-primary'
      >
        Edit
      </Button>

      <Button
        Icon={IoTrashOutline}
        onClick={onDelete}
        size='sm'
        variant='outline-danger'
      >
        Delete
      </Button>
    </div>
  </div>
);

export default ListItem;