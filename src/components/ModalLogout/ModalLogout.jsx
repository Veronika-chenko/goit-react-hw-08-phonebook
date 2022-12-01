import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from 'redux/auth/operations';
import {
  Button,
  Grid,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export const ModalLogout = ({ modalHandler }) => {
  const { isOpen, onClose } = modalHandler;
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    onClose();
  };
  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={3}>
        <ModalCloseButton />
        <ModalHeader>Are you sure you want to log out?</ModalHeader>
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <Button onClick={handleLogOut}>Logout</Button>
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

ModalLogout.propTypes = {
  modalHandler: PropTypes.object.isRequired,
};
