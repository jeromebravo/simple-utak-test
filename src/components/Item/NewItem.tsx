import { useRef } from 'react';
import { toast } from 'react-toastify';

import { ItemFields } from '../../interfaces/Item';
import { createItem } from '../../services/item';

import Modal from '../Modal';
import ItemForm from './ItemForm';

interface NewItemProps {
  onClose: () => void;
  visible: boolean;
}

const NewItem: React.FC<NewItemProps> = ({ onClose, visible }) => {
  const modalRef: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const handleSubmit = (item: ItemFields) => {
    createItem(item);
    handleClose();
    toast('Successfuly added!');
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
      title='NEW ITEM'
      visible={visible}
    >
      <ItemForm
        onSubmit={handleSubmit}
        submitButtonText='Submit'
      />
    </Modal>
  );
}

export default NewItem;