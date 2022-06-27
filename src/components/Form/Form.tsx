interface FormProps {
  children?: React.ReactNode;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}

export default Form;