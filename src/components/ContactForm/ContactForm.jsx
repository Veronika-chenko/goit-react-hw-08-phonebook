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
    const name = data.name;
    const number = data.tel;
    // console.log(name, number);
    dispatch(addContact({ name, number }));
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
      <label htmlFor="tel">Number</label>
      <input
        {...register('tel', {
          required: 'Number is required field',
          pattern:
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        })}
        type="text"
      />
      <div>{errors?.tel && <p>{errors?.tel?.message || 'Error'}</p>}</div>
      <FormButton type="submit">Add contact</FormButton>
    </FormWrap>
  );
};

// #1
// pattern.value /regular expr/

// name
// "Name may contains only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
