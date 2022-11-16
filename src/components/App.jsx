import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FormData } from './form/form';
import { Filter } from './filter/Filter';
import { ContactsList } from './contacts/contactsList';
import { Conteiner } from './conteiner.styled';
import { contactsData } from './contactsData';

export const App = () => {
  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <FormData />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Conteiner>
  );
};
