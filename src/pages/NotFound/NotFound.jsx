import { NavLink } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { PageTitle } from 'components/PageTitle';

export default function NotFound() {
  return (
    <>
      <PageTitle title="NotFound" />
      <Text
        fontSize="xl"
        color="#ff001b"
        textShadow="rgb(0 0 0 / 25%) 0px 2px 2px"
        mb={4}
      >
        Sorry, we couldn't find that page
      </Text>
      <Text as="i">
        <Text as={NavLink} to="/">
          Go home
        </Text>
      </Text>
    </>
  );
}
