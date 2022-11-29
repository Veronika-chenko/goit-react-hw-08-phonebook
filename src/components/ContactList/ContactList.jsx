import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <Flex as="ul" direction="column" gap={4}>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </Flex>
  );
};
