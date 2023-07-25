import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Heading,
  Spinner,
  useBreakpointValue,
} from '@chakra-ui/react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

import { ContactList } from 'components/ContactList';
import { FilterContacts } from 'components/FilterContacts';
import { ContactForm } from 'components/ContactForm';
import { PageTitle } from 'components/PageTitle';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isBelowMd = useBreakpointValue({ base: true, md: false });

  return (
    <Box maxW={isBelowMd && '450px'} mx={isBelowMd && 'auto'}>
      <PageTitle title="My Contacts" />
      <Heading as="h1" mb={5}>
        My Contacts
      </Heading>
      <ContactForm />
      <Box>
        <FilterContacts />
        <Flex justify="center" w="300px" mb={2}>
          {isLoading && <Spinner color="gray.300" />}
        </Flex>
        <ContactList />
      </Box>
    </Box>
  );
}
