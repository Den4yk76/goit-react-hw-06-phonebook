import { combineReducers } from 'redux';
import types from './contacts-types';

// contacts: {
//     items: [],
//     filter: '',
//   },

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      const contactsArr = [];
      state.forEach(el => {
        contactsArr.push(el.name, el.number);
      });

      if (contactsArr.includes(payload.number || payload.name.toLowerCase())) {
        alert('This person or number is already in contacts');
        return state;
      } else {
        return [...state, payload];
      }
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FIND:
      console.log('FIND reducer');
      return payload;
    // return state;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
