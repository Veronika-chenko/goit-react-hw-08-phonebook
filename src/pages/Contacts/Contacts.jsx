import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Heading } from '@chakra-ui/react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

import { ContactList } from 'components/ContactList';
import { FilterContacts } from 'components/FilterContacts';
import { ContactForm } from 'components/ContactForm';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>My Contacts</title>
      </Helmet>
      <Heading as="h1" mb={5}>
        My Contacts
      </Heading>
      <ContactForm />
      <Box>
        <FilterContacts />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </Box>
    </>
  );
}
