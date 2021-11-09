import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (userName, userNumber) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: userName,
    number: userNumber,
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.FIND,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
