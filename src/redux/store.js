import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
const middleware = [...getDefaultMiddleware(), logger];

// contacts: {
//     items: [],
//     filter: '',
//   },

// {
//    items: [],
//    filter: '',
// },

// const initData = () => {
//   const data = localStorage.getItem('contacts');
//   if (data) {
//     console.log(JSON.parse(data));
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

// const store = configureStore({
//   reducer: reducer,
//   middleware: middleware,
//   devTools: process.env.NODE_ENV === 'development',
//   preloadedState: preloadState,
// });

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
  // preloadedState: preloadState,
});

export default store;
