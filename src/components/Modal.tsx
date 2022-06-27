import { IoCloseCircleOutline } from 'react-icons/io5';

interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
  modalRef?: React.LegacyRef<HTMLDivElement>;
  size: 'sm' | 'lg';
  title?: string;
  visible: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  modalRef,
  size,
  title,
  visible
}) => (
  <section
    className={`modal ${visible && 'modal--visible'}`}
    onClick={onClose}
  >
    <div
      className={`modal__content modal__content--${size}`}
      onClick={e => e.stopPropagation()}
      ref={modalRef}
    >
      <div className='modal__header'>
        <IoCloseCircleOutline
          className='modal__close'
          onClick={onClose}
        />
        
        {title && <h4>{title}</h4>}
      </div>

      <div className='modal__body'>
        {children}
      </div>
    </div>
  </section>
);

export default Modal;