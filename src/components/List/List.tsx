interface ListProps {
  children?: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => (
  <section className='list'>
    {children}
  </section>
);

export default List;