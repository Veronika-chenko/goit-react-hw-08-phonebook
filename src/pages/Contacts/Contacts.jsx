import { ContactList } from 'components/ContactList/ContactList';
import { FilterContacts } from 'components/FilterContacts';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

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
      <ContactForm />
      <FilterContacts />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
