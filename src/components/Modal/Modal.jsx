import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalWrap } from './Modal.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ contact, onClose }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  // #1
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // #2
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      number,
    },
  });

  const onSubmit = data => {
    dispatch(updateContact({ id, data }));
    reset();
    onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name
            <input
              {...register('name', {
                required: 'Name is required field',
                pattern: {
                  value:
                    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                  message:
                    'Name may contains only letters, apostrophe, dash and spaces.',
                },
              })}
              type="text"
            />
          </label>

          <div>{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}</div>
          {/*  */}
          <label>
            Number
            <input
              {...register('number', {
                required: 'Number is required field',
                pattern:
                  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                message:
                  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              })}
              type="tel"
            />
          </label>

          <div>
            {errors?.number && <p>{errors?.number?.message || 'Error'}</p>}
          </div>
          <button type="submit">Update contact</button>
        </form>
      </ModalWrap>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
