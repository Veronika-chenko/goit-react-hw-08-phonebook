import { NavLink } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex gap={5}>
      <Button
        borderRadius="25% 75% 53% 47% / 44% 53% 47% 56%"
        _hover={{ boxShadow: '0px 4px 18px -2px #c3d0dd' }}
        as={NavLink}
        fontSize="lg"
        py={5}
        to="/register"
      >
        Sing up
      </Button>
      <Button
        as={NavLink}
        fontSize="lg"
        py={5}
        borderRadius="70% 30% 77% 23% / 63% 36% 64% 37% "
        _hover={{ boxShadow: '0px 4px 18px -2px #c3d0dd' }}
        to="/login"
      >
        Log in
      </Button>
    </Flex>
  );
};
