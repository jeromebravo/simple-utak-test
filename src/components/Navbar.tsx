import { IoFastFoodOutline, IoAddCircleOutline } from 'react-icons/io5';

import Button from './Button';

interface NavbarProps {
  onButtonClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick }) => (
  <nav className='navbar'>
    <div className='navbar__brand'>
      <IoFastFoodOutline />
      <h3>MENU</h3>
    </div>

    <Button
      Icon={IoAddCircleOutline}
      onClick={onButtonClick}
    >
      New Item
    </Button>
  </nav>
);

export default Navbar;