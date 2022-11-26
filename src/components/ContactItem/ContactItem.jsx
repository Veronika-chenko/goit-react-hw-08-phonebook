import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { ContactDeleteButton, ContactItemWrap } from './ContactsItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ContactItemWrap>
        {name}: {number}
        <ContactDeleteButton onClick={() => dispatch(deleteContact(id))}>
          Delete
        </ContactDeleteButton>
        <ContactDeleteButton onClick={toggleModal}>Update</ContactDeleteButton>
      </ContactItemWrap>
      {showModal && <Modal contact={contact} onClose={toggleModal} />}
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
