interface GroupProps {
  children?: React.ReactNode;
}

const Group: React.FC<GroupProps> = ({ children }) => (
  <div className='form__group'>
    {children}
  </div>
);

export default Group;