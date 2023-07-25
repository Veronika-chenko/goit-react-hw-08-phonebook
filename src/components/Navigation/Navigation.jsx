import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { ThemeToggler } from 'components/ThemeToggler';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" py={5}>
      <Container maxW="container.xl">
        <Flex
          align="center"
          gap={4}
          direction={{ base: 'column', md: 'row' }}
          justify={{ md: 'space-between' }}
        >
          <Flex
            w={{ base: '100%', md: 'inherit' }}
            gap={5}
            align="center"
            justify={{ base: 'space-between' }}
          >
            <Text as={Link} to="/" fontSize="xl" fontWeight="700">
              ContactBook
            </Text>
            <ThemeToggler />
          </Flex>
          {!isLoggedIn && (
            <Flex
              justify="space-between"
              align="center"
              alignSelf={{ base: 'flex-end' }}
            >
              <AuthNav />
            </Flex>
          )}
          {isLoggedIn && (
            <Flex
              justify="space-between"
              align="center"
              alignSelf={{ base: 'flex-end' }}
            >
              <UserMenu />
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
