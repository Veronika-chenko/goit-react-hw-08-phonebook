import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { updateContact } from 'redux/contacts/operations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';

import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export const ModalEdit = ({ props: { contact, isOpen, onClose } }) => {
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
        <ModalCloseButton zIndex="docked" />
        <Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
          <FormControl pos="relative">
            <FormLabel mb={3}>Name</FormLabel>
            <InputGroup>
              <Input
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value:
                      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                    message:
                      'Name may contains only letters, apostrophe, dash and spaces.',
                  },
                })}
                type="text"
              />
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineUser color="gray.300" />}
              />
            </InputGroup>
            <Box position="absolute" top="100%">
              {errors?.name && (
                <Text
                  fontSize="xs"
                  color="#ff001b"
                  textShadow="rgb(0 0 0 / 25%) 0px 2px 2px"
                >
                  {errors?.name?.message || 'Error'}
                </Text>
              )}
            </Box>
          </FormControl>
          <FormControl pos="relative">
            <FormLabel mb={3}>Number</FormLabel>
            <InputGroup>
              <Input
                {...register('number', {
                  required: 'Number is required',
                  pattern:
                    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                  message:
                    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
                })}
                type="tel"
              />
              <InputLeftElement
                pointerEvents="none"
                transform="rotate(-90deg) scale(-1) "
                children={<AiOutlinePhone color="gray.300" />}
              />
            </InputGroup>

            <Box position="absolute" top="100%">
              {errors?.number && (
                <Text
                  fontSize="xs"
                  color="#ff001b"
                  textShadow="rgb(0 0 0 / 25%) 0px 2px 2px"
                >
                  {errors?.number?.message || 'Error'}
                </Text>
              )}
            </Box>
          </FormControl>
          <Button type="submit">Save</Button>
        </Stack>
      </ModalContent>
    </Modal>,
    modalRoot
  );
};

ModalEdit.propTypes = {
  props: PropTypes.shape({
    contact: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  }),
};
