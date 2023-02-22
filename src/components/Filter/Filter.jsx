import { InputLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

export default function Filter() {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterInputChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <InputLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterInputChange}
      />
    </InputLabel>
  );
}
