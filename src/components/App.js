import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


const phoneContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const App = () => {

    const [contacts, setContacts] = useState(() => {
        return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts; //Если значение не найдено, устанавливается значение массива phoneContacts.
      });
      const [filter, setFilter] = useState('');

      const handleSubmit = ({ name, number }) => {
        const contact = {
          id: nanoid(),
          name,
          number,
        };
    
        this.state.contacts.some(i => i.name === contact.name)
          ? alert(`${name} is already in contacts`)
          : this.setState(({ contacts }) => ({
              contacts: [contact, ...contacts],
            }));
      };

      const handleChange = e => {
        const { name, value } = e.target;
        setFilter({ [name]: value });
      };

      const handleDelete = e => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact => contact.id !== e),
        }));
      };

  return (
        <div
            style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101',
            }}
        >
            <h1>Phonebook</h1>
            <ContactForm handleSubmit={handleSubmit} />
            <h2> Contacts</h2>
            <Filter filter={filter} handleChange={handleChange} />
            <ContactList
            contacts={this.getFilteredContacts()}
            handleDelete={handleDelete}
            />
        </div>
    )
  }

  export default App;