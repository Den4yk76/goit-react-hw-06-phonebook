import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';
// import types from './contacts-types';

// contacts: {
//     items: [],
//     filter: '',
//   },

const initData = () => {
  const data = localStorage.getItem('contacts');
  if (data) {
    console.log(JSON.parse(data));
    return JSON.parse(data);
  } else {
    return [];
  }
};

const items = createReducer(initData(), {
  [actions.addContact]: (state, { payload }) => {
    const contactsArr = [];
    state.forEach(el => {
      contactsArr.push(el.name, el.number);
    });

    if (contactsArr.includes(payload.number || payload.name.toLowerCase())) {
      alert('This person or number is already in contacts');
      return state;
    } else {
      localStorage.setItem('contacts', JSON.stringify([...state, payload]));
      return [...state, payload];
    }
  },
  [actions.deleteContact]: (state, { payload }) => {
    localStorage.setItem(
      'contacts',
      JSON.stringify(state.filter(({ id }) => id !== payload)),
    );
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
