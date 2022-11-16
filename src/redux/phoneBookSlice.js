// 1. створюємо слайс
import { createSlice } from '@reduxjs/toolkit';

import { contactsData } from '../components/contactsData';

//2 оголошую початковий стейт

const initialState = contactsData;

/// 3. створюэмо редюсер
const contactsBookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      if (state.find(contact => contact.name === action.payload.name)) {
        return alert(`${action.payload.name} is already exist!`);
      }
      state.push(action.payload);
    },
    deleteTask(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteTask } = contactsBookSlice.actions;

export default contactsBookSlice.reducer;
