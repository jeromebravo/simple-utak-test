interface LabelProps {
  children?: React.ReactNode;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => (
  <label
    className='form__label'
    htmlFor={htmlFor}
  >
    {children}
    <span className='form__label-star'>*</span>
  </label>
);

export default Label;