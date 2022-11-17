import { createSlice } from '@reduxjs/toolkit';

let filter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filter,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
