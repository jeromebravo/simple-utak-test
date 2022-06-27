interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  onChange,
  value,
  ...otherProps
}) => (
  <input
    className='form__input'
    id={name}
    name={name}
    onChange={onChange}
    value={value}
    {...otherProps}
  />
);

export default Input;