import { FilterWrap } from './FilterContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const FilterContacts = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <FilterWrap>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        value={filterValue}
        onChange={handleInputChange}
      />
    </FilterWrap>
  );
};
