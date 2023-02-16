import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addContact } from 'redux/contacts/operations';

import { Box, Button, FormLabel, Input, Stack, Text } from '@chakra-ui/react';

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
    <Box> 
      <Stack width={300} as="form" gap={3} mb={4} onSubmit={handleSubmit(onSubmit)}>
        <Box pos="relative">
          <FormLabel>Name</FormLabel>
          <Input
            size="sm"
            w="300px"
            {...register('name', {
              required: 'Name is required',
              pattern: {
                value: /^[a-z A-Z]*$/,
                message: 'Name must be letters'
              },
              minLength: {
                value: 2,
                message: 'Name should be at least 2 characters'
              },
            })}
            type="text"
          />
          <Box position="absolute" bottom={-5}>
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
        </Box>
        <Box pos="relative">
          <FormLabel>Number</FormLabel>
          <Input
            size="sm"
            w="300px"
            {...register('number', {
              required: 'Number is required',
              pattern: {
                value:
                  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                message:
                  'Number must be digits and at least 4 characters',
              },
            })}
            type="tel"
          />
          <Box position="absolute" bottom={-5}>
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
        </Box>
        <Button size="sm" w="300px" type="submit">
          Add contact
        </Button>
      </Stack>
    </Box>
  );
};
