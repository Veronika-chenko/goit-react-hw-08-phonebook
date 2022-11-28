import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Container maxW="container.xl" mt={4}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      {/* <Toaster /> */}
    </>
  );
};
