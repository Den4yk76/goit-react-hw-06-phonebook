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

export default { addContact };
