import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, Flex, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex align="center" gap={5}>
      <Text fontSize="lg">Welcome, {user.name}</Text>
      <Button
        borderRadius="86% 14% 72% 28% / 44% 53% 47% 56%"
        _hover={{ boxShadow: '0px 4px 18px -2px #c3d0dd' }}
        type="submit"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </Flex>
  );
};
