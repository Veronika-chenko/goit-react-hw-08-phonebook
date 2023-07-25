import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { TiContacts } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex justify="center" align="center">
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap={4}
        maxW="400px"
        mt={{ md: '160px' }}
      >
        <Heading
          as="h1"
          align="center"
          fontWeight="700"
          fontSize="24px"
          mb={isLoggedIn ? 3 : 2}
        >
          Welcome to Personal Contact Book
        </Heading>
        <Flex justify="center" align="center">
          <TiContacts style={{ width: '50px', height: '50px' }} />
        </Flex>
        <Text align="center" mb={3}>
          This user-friendly application provides secure storage of your
          contacts
        </Text>
        {isLoggedIn && (
          <Button
            as={Link}
            to="/contacts"
            align="center"
            _hover={{ boxShadow: '0px 4px 18px -2px #c3d0dd' }}
          >
            My Contacts
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
