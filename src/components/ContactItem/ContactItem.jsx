import PropTypes from 'prop-types';
import { ModalEdit } from 'components/ModalEdit';
import { ModalDelete } from 'components/ModalDelete';
import { useDisclosure, Box, Button, Flex, Text } from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

export const ContactItem = ({ contact }) => {
  const { name, number } = contact;
  const editModalHandler = useDisclosure();
  const deleteModalHandler = useDisclosure();

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
            onClick={deleteModalHandler.onOpen}
          >
            <AiOutlineDelete />
          </Button>
          <Button
            size="sm"
            borderRadius="28% 72% 52% 48% / 44% 53% 47% 56%"
            onClick={editModalHandler.onOpen}
          >
            <AiOutlineEdit />
          </Button>
        </Flex>
      </Flex>
      {editModalHandler.isOpen && (
        <ModalEdit contact={contact} modalHandler={editModalHandler} />
      )}
      {deleteModalHandler.isOpen && (
        <ModalDelete contact={contact} modalHandler={deleteModalHandler} />
      )}
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
