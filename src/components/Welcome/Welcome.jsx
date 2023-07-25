import { Flex, Heading, Text } from '@chakra-ui/react';
import { TiContacts } from 'react-icons/ti';

export const Welcome = () => {
  return (
    <Flex justify="center" align="center">
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap={4}
        maxW="400px"
      >
        <Heading
          as="h1"
          align="center"
          fontWeight="700"
          fontSize="24px"
          mt={{ md: '160px' }}
          mb={2}
        >
          Welcome to Personal Contact Book
        </Heading>
        <Flex justify="center" align="center">
          <TiContacts style={{ width: '50px', height: '50px' }} />
        </Flex>
        <Text align="center">
          This user-friendly application provides secure storage of your
          contacts
        </Text>
      </Flex>
    </Flex>
  );
};
