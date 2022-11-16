import { Label } from './filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispath = useDispatch();

  return (
    <Label htmlFor="">
      Find contacts by name
      <input type="text" onChange={e => dispath(setFilter(e.target.value))} />
    </Label>
  );
};
