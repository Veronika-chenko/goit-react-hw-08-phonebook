import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
// import {ColorModeSwitcher} from './ColorModeSwitcher'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header">
      <Container maxW="container.xl">
        {!isLoggedIn && (
          <Flex justify="space-between" align="center">
            <Text as="h2" fontSize="xl" fontWeight="700">
              Welcome to PhoneBook
            </Text>
            <AuthNav />
          </Flex>
        )}
        {isLoggedIn && (
          <Flex justify="space-between" align="center">
            <Link as={NavLink} fontSize="lg" py={5} to="/contacts">
              Contacts
            </Link>
            <UserMenu />
          </Flex>
        )}
      </Container>
    </Box>
  );
};
