import { useEffect, useState } from 'react';
import { IoAddCircleOutline, IoTrashOutline } from 'react-icons/io5';

import Item, { ItemCategory, ItemFields } from '../../interfaces/Item';

import Button from '../Button';
import {
  Form,
  Group,
  Input,
  Label,
  Select
} from '../Form';

interface ItemFormProps {
  item?: Item | null;
  onSubmit: (item: ItemFields) => void;
  submitButtonText: string;
}

const ItemForm: React.FC<ItemFormProps> = ({
  item,
  onSubmit,
  submitButtonText
}) => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    cost: '',
    stock: ''
  });
  const [options, setOptions] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setFormData({
      category: item?.category || '',
      name: item?.name || '',
      price: item?.price.toString() || '',
      cost: item?.cost.toString() || '',
      stock: item?.stock.toString() || ''
    });

    setOptions(item?.options || []);
  }, [item]);

  useEffect(() => {
    // This will check if the inputs are valid
    // The form is disabled and cannot be submitted until every input is valid

    const invalidFormData = Object.values(formData).some(value => value.trim() === '');
    let invalidOptions = false;

    if (options.length > 0) {
      invalidOptions = options.some(option => option.trim() === '');
    }

    setDisabled(invalidFormData || invalidOptions);
  }, [formData, options]);

  const handleCategoryChange = (e:  React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      category: e.target.value
    });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberTypes = ['price', 'cost', 'stock'];

    if (numberTypes.includes(e.target.name) && isNaN(Number(e.target.value))) return; 

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  }

  const handleDeleteOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  }

  const handleSubmit = () => {
    const newItem: ItemFields = {
      ...formData,
      category: formData.category as ItemCategory,
      price: Number(formData.price),
      cost: Number(formData.cost),
      stock: Number(formData.stock),
      options
    }

    onSubmit(newItem);
    
    if (!item) {
      setFormData({
        category: '',
        name: '',
        price: '',
        cost: '',
        stock: ''
      });
      setOptions([]);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <Label htmlFor='category'>Category</Label>
        <Select
          name='category'
          onChange={handleCategoryChange}
          value={formData.category}
        >
          <option value='' disabled>-- Select Category --</option>
          <option value='main'>Main Dish</option>
          <option value='side'>Side Dish</option>
          <option value='beverage'>Beverage</option>
          <option value='extra'>Extra</option>
        </Select>
      </Group>

      <Group>
        <Label htmlFor='name'>Name</Label>
        <Input
          name='name'
          onChange={handleInputChange}
          value={formData.name}
        />
      </Group>

      <Group>
        <Label htmlFor='price'>Price</Label>
        <Input
          min={0}
          name='price'
          onChange={handleInputChange}
          value={formData.price}
        />
      </Group>

      <Group>
        <Label htmlFor='cost'>Cost</Label>
        <Input
          min={0}
          name='cost'
          onChange={handleInputChange}
          value={formData.cost}
        />
      </Group>

      <Group>
        <Label htmlFor='stock'>Stock</Label>
        <Input
          min={0}
          name='stock'
          onChange={handleInputChange}
          value={formData.stock}
        />
      </Group>

      {options.map((option, index) => (
        <Group key={index}>
          <Label htmlFor={`option-${index + 1}`}>
            <span>Option {index + 1}</span>
            <IoTrashOutline
              color='#F53A3A'
              className='form__label-icon'
              onClick={() => handleDeleteOption(index)}
            />
          </Label>
          <Input
            name={`option-${index + 1}`}
            onChange={e => handleOptionChange(e, index)}
            value={option}
          />
        </Group>
      ))}

      <Button
        Icon={IoAddCircleOutline}
        onClick={() => setOptions([...options, ''])}
        size='lg'
        type='button'
        variant='outline-primary'
      >
        Add Option
      </Button>

      <Button
        disabled={disabled}
        size='lg'
        type='submit'
      >
        {submitButtonText}
      </Button>
    </Form>
  );
}

export default ItemForm;