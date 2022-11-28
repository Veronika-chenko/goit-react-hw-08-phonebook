import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex gap={5}>
      <Link as={NavLink} fontSize="lg" py={5} to="/register">
        Register
      </Link>
      <Link as={NavLink} fontSize="lg" py={5} to="/login">
        Log in
      </Link>
    </Flex>
  );
};
