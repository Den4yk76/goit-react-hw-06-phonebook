import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (userName, userNumber) => ({
  payload: {
    id: uuidv4(),
    name: userName,
    number: userNumber,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/find');

export default { addContact, deleteContact, changeFilter };
