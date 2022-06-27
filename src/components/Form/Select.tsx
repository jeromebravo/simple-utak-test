interface SelectProps {
  children?: React.ReactNode;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Select: React.FC<SelectProps> = ({
  children,
  name,
  onChange,
  value
}) => (
  <select
    className='form__select'
    id={name}
    name={name}
    onChange={onChange}
    value={value}
  >
    {children}
  </select>
);

export default Select;