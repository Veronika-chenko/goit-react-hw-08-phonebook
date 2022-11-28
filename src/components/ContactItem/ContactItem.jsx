import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { Modal1 } from 'components/Modal/Modal';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex as="li" align="center" gap={6} p={2}>
        {name}: {number}
        <Stack spacing={4} direction="row">
          <Button size="sm" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
          <Button size="sm" onClick={onOpen}>
            Update
          </Button>
        </Stack>
      </Flex>
      <Modal1 props={{ contact, isOpen, onClose }} />
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
