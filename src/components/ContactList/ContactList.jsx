import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListWrap } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ContactListWrap>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </ContactListWrap>
  );
};
