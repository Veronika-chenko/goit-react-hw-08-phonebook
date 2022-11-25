import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { ContactItem, ContactDeleteButton } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ContactDeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactDeleteButton>
          <ContactDeleteButton onClick={() => dispatch(updateContact(id))}>
            Update
          </ContactDeleteButton>
        </ContactItem>
      ))}
    </ul>
  );
};
