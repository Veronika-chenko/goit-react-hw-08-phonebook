import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import {
  Stack,
  Input,
  Flex,
  Button,
  Text,
  Box,
  // Icon,
  InputLeftElement,
  // InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import {
  AiOutlineMail,
  AiFillLock,
  // AiOutlineEye,
  // AiOutlineEyeInvisible,
} from 'react-icons/ai';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <Flex justify="center" align="canter">
      <Flex justify="center" align="canter" direction="column" w="400px">
        <Text as="h1" align="center" fontWeight="700" fontSize="24px" mb={4}>
          Log in
        </Text>
        <Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
          <Box pos="relative">
            <Text as="label" htmlFor="email">
              Email
            </Text>
            <InputGroup mt={2}>
              <Input
                {...register('email', { required: 'Email is required field' })}
                id="email"
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
          </Box>
          <Box pos="relative">
            <Text as="label" htmlFor="password">
              Password
            </Text>
            <InputGroup mt={2}>
              <Input
                {...register('password', {
                  required: 'Password is required field',
                  minLength: {
                    value: 7,
                    message: 'Min length is 7',
                  },
                })}
                id="password"
                type="password"
              />
              <InputLeftElement
                pointerEvents="none"
                children={<AiFillLock color="gray.300" />}
              />
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
          </Box>
          <Button type="submit">Log In</Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

// 400 Bad Request //handle
