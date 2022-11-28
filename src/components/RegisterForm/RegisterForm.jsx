import { useDispatch } from 'react-redux';
import { singup } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillLock,
  // AiOutlineEye,
  // AiOutlineEyeInvisible,
} from 'react-icons/ai';
import {
  Stack,
  Input,
  Flex,
  Button,
  Text,
  Box,
  // Icon,
  InputLeftElement,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { useState } from 'react';

export const RegisterForm = () => {
  const [type, setType] = useState('password');
  // const [icon, setIcon] = useState(AiOutlineEyeInvisible);
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

  const showPwd = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <Flex justify="center" align="canter">
      <Flex justify="center" align="canter" direction="column" w="400px">
        <Text as="h1" align="center" fontWeight="700" fontSize="24px" mb={4}>
          Sign up
        </Text>
        <Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
          <Box pos="relative">
            <Text as="label" htmlFor="name">
              Username
            </Text>
            <InputGroup mt={2}>
              <Input
                {...register('name', {
                  required: 'Username is required field',
                })}
                id="name"
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
          </Box>
          <Box pos="relative">
            <Text as="label" htmlFor="email" mb={2}>
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
            <Text as="label" htmlFor="password" mb={2}>
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
                type={type}
              />
              <InputLeftElement
                pointerEvents="none"
                children={<AiFillLock color="gray.300" />}
              />
              <InputRightElement>
                <Button
                  background="transparent"
                  size="sm"
                  onClick={showPwd}
                ></Button>
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
          </Box>
          <Button type="submit">Register</Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

// 400 Bad Request //handle already exist
