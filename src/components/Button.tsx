import { IconType } from 'react-icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  Icon?: IconType;
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'danger' | 'outline-primary' | 'outline-danger';
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  Icon,
  size = 'md',
  variant = 'primary',
  ...otherProps
}) => (
  <button
    className={`button button--${variant} button--${size} ${disabled && 'button--disabled'}`}
    disabled={disabled}
    {...otherProps}
  >
    {Icon && <Icon className='button__icon' />}
    {children}
  </button>
);

export default Button;