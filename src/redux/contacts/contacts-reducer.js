import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';
// import types from './contacts-types';

// contacts: {
//     items: [],
//     filter: '',
//   },

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
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
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
