import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <Flex as="ul" direction="column">
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </Flex>
  );
};
// display="inline-flex"
