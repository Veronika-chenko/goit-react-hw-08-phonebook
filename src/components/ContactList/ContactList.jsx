import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const alphabeticalContacts = visibleContacts.sort(
    (firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
  );

  return (
    <Flex as="ul" direction="column" gap={4}>
      {alphabeticalContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </Flex>
  );
};
