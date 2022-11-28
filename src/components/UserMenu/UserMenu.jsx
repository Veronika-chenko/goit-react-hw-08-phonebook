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
      <Button type="submit" onClick={handleLogOut}>
        Logout
      </Button>
    </Flex>
  );
};
