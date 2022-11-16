import { Label } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ onChange }) => {
  const dispath = useDispatch();

  return (
    <Label htmlFor="">
      Find contacts by name
      <input type="text" onChange={e => dispath(setFilter(e.target.value))} />
    </Label>
  );
};
