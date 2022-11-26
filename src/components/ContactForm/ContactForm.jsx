import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { FormWrap, FormButton } from './ContactForm.styled';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(addContact(data));
    reset();
  };

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="text">Name</label>
      <input
        {...register('name', {
          required: 'Name is required field',
          pattern: {
            value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message:
              'Name may contains only letters, apostrophe, dash and spaces.',
          },
        })}
        type="text"
      />
      <div>{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}</div>

      <label htmlFor="number">Number</label>
      <input
        {...register('number', {
          required: 'Number is required field',
          pattern: {
            value:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          },
        })}
        type="tel"
      />
      <div>{errors?.number && <p>{errors?.number?.message || 'Error'}</p>}</div>
      <FormButton type="submit">Add contact</FormButton>
    </FormWrap>
  );
};

// #1
// pattern.value /regular expr/

// #2 'name' & 'number' fields names is expected for backend
// чи надійно їх передавати як просто data?

// name
// "Name may contains only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
