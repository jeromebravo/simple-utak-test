import { useRef } from 'react';
import { toast } from 'react-toastify';

import Item, { ItemFields } from '../../interfaces/Item';
import { updateItem, deleteItem } from '../../services/item';

import Modal from '../Modal';
import ItemForm from './ItemForm';

interface EditItemProps {
  item: Item | null;
  onClose: () => void;
  visible: boolean;
}

const EditItem: React.FC<EditItemProps> = ({
  item,
  onClose,
  visible
}) => {
  const modalRef: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const handleUpdate = (updatedItem: ItemFields) => {
    if (!item) return;

    if (item.category !== updatedItem.category) {
      deleteItem(item);
    }

    updateItem(item.id, updatedItem);
    handleClose();
    toast('Successfuly updated!');
  }

  const handleClose = () => {
    modalRef.current?.scrollTo(0, 0);
    onClose();
  }

  return (
    <Modal
      modalRef={modalRef}
      onClose={handleClose}
      size='lg'
      title='EDIT ITEM'
      visible={visible}
    >
     <ItemForm
        onSubmit={handleUpdate}
        submitButtonText='Update'
        item={item}
     /> 
    </Modal>
  );
}

export default EditItem;