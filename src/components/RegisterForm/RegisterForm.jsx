import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { singup } from 'redux/auth/operations';

import {
  Stack,
  Input,
  Flex,
  Button,
  Text,
  Box,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Heading,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(singup(data));
    reset();
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex justify="center" align="canter">
      <Flex
        pos="relative"
        justify="center"
        align="canter"
        direction="column"
        w="400px"
      >
        <Heading as="h1" align="center" fontWeight="700" fontSize="24px" mb={4}>
          Sign up
        </Heading>

        <Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
          <FormControl pos="relative">
            <FormLabel mb={2}>Username</FormLabel>
            <InputGroup>
              <Input
                {...register('name', {
                  required: 'Username is required',
                })}
                type="text"
              />
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineUser color="gray.300" />}
              />
            </InputGroup>
            <Box position="absolute">
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
            <FormLabel mb={2}>Email</FormLabel>
            <InputGroup>
              <Input
                {...register('email', { required: 'Email is required' })}
                type="email"
              />
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineMail color="gray.300" />}
              />
            </InputGroup>
            <Box position="absolute">
              {errors?.email && (
                <Text
                  fontSize="xs"
                  color="#ff001b"
                  textShadow="rgb(0 0 0 / 25%) 0px 2px 2px"
                >
                  {errors?.email?.message || 'Error'}
                </Text>
              )}
            </Box>
          </FormControl>
          <FormControl pos="relative">
            <FormLabel mb={2}>Password</FormLabel>
            <InputGroup>
              <Input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 7,
                    message: 'Min length is 7',
                  },
                })}
                type={showPassword ? 'text' : 'password'}
              />
              <InputLeftElement
                pointerEvents="none"
                children={<AiFillLock color="gray.300" />}
              />
              <InputRightElement>
                <Button
                  background="transparent"
                  p="0"
                  w="100%"
                  aria-label="Show hide password"
                  _hover={{ bg: 'transparent' }}
                  _focus={{ bg: 'transparent' }}
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Box pos="absolute">
              {errors?.password && (
                <Text
                  fontSize="xs"
                  color="#ff001b"
                  textShadow="rgb(0 0 0 / 25%) 0px 2px 2px"
                >
                  {errors?.password?.message || 'Error'}
                </Text>
              )}
            </Box>
          </FormControl>
          <Button type="submit">Sign up</Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

// 400 Bad Request //handle already exist
