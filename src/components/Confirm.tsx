import Button from './Button';
import Modal from './Modal';


interface ConfirmProps {
  description: string;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  visible: boolean;
}

const Confirm: React.FC<ConfirmProps> = ({
  description,
  onClose,
  onConfirm,
  title,
  visible
}) => (
  <Modal
    onClose={onClose}
    size='sm'
    title={title}
    visible={visible}
  >
    <p>{description}</p>

    <div className='list__item-options'>
      <Button
        onClick={onClose}
        variant='outline-primary'
      >
        Cancel
      </Button>

      <Button
        onClick={onConfirm}
        variant='outline-danger'
      >
        Confirm
      </Button>
    </div>
  </Modal>
);

export default Confirm;