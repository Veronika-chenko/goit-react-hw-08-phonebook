import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { Input, Stack } from '@chakra-ui/react';

export const FilterContacts = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <Stack w="300px" mb={5}>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        size="sm"
        id="filter"
        type="text"
        value={filterValue}
        onChange={handleInputChange}
      />
    </Stack>
  );
};
