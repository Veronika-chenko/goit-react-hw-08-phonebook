import { useAuth } from 'hooks/useAuth';
import { ModalLogout } from 'components/ModalLogout';
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';

export const UserMenu = () => {
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justify="space-between" align="center" gap={5} w={'100%'}>
        <Text fontSize="lg">Welcome {user.name}</Text>

        <Button
          borderRadius="86% 14% 72% 28% / 44% 53% 47% 56%"
          _hover={{ boxShadow: '0px 4px 18px -2px #c3d0dd' }}
          type="submit"
          onClick={onOpen}
        >
          Logout
        </Button>
      </Flex>
      <ModalLogout modalHandler={{ isOpen, onClose }} />
    </>
  );
};
