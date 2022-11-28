import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import {
  Button,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';

const modalRoot = document.querySelector('#modal-root');
export const Modal1 = ({ props: { contact, isOpen, onClose } }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

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
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={3}>
        <ModalCloseButton />
        <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name
            <Input
              mt={3}
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
            <Input
              mt={3}
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
          <Button type="submit">Save</Button>
        </Stack>
      </ModalContent>
    </Modal>,
    modalRoot
  );
};

Modal1.propTypes = {
  props: PropTypes.shape({
    contact: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  }),
};
