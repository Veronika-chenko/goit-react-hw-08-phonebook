import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { ModalEdit } from 'components/Modal/Modal';
import { useDisclosure, Box, Button, Flex, Text } from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="li"
        justify="space-between"
        align="center"
        gap={6}
        w="300px"
        p={3}
        borderRadius="16px"
        boxShadow="0px 4px 18px -2px #c3d0dd"
      >
        <Box>
          <Text fontSize="18px" fontWeight="600">
            {name}
          </Text>
          <Text>{number}</Text>
        </Box>
        <Flex gap={3}>
          <Button
            size="sm"
            borderRadius="70% 30% 56% 44% / 44% 61% 39% 56%"
            onClick={() => dispatch(deleteContact(id))}
          >
            <AiOutlineDelete />
          </Button>
          <Button
            size="sm"
            borderRadius="28% 72% 52% 48% / 44% 53% 47% 56%"
            onClick={onOpen}
          >
            <AiOutlineEdit />
          </Button>
        </Flex>
      </Flex>
      <ModalEdit props={{ contact, isOpen, onClose }} />
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
