import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';
import ContactsList from './ConatctsList/ConatctsList';
import './styles.css';
import store from '../redux/store';

export default function App() {
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const findContact = name => {
    setFilter(name);
    // changeFilter(name);
  };

  // const deleteContact = e => {
  //   setContacts(prevState => prevState.filter(el => el.id !== e.target.id));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactsList
        filter={filter}
        // contacts={contacts}
        findContact={findContact}
        // deleteContact={deleteContact}
      />
    </div>
  );
}
