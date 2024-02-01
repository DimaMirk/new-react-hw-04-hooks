import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';


 export default function App() {
   
   const [contacts, setContacts] = useState([]);
   const [filter, setFilter] = useState('');
   const [visibleContacts, setVisibleContacts] = useState([])
   
   useEffect(() => {
      let visCon = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
      setVisibleContacts(visCon)
   },[filter,contacts ])

  const onSubmitForm = ({ name, number }) => {
        let newUser = {
          id: nanoid(),
          name,
          number
      }
      
    let donorExist = isDonorExist(name)
    
    if (!donorExist) {
      setContacts((prev)=>([...prev,newUser]))
    } else {
      alert(`Donor with name ${name} already exist`)
    }

  }
   
  const isDonorExist = (name) => {
    if (contacts.length !== 0) {
      return contacts.find((contact) => (contact.name.toLowerCase() === name.toLocaleLowerCase()))
    }
    return false;
  }

  const onDeleteContact = (ev) => {

    const deleteId = ev.currentTarget.id;
    let newContacts = contacts.filter(contact => (contact.id !== deleteId));
    setContacts(newContacts)
  }
  
  const  filterChange = (ev) => {
      const { value } = ev.currentTarget;
      setFilter(value)
  }
   
  return (
      <>
        <h1>Name</h1>
        <ContactForm onSubmit={ onSubmitForm } />

        <h1>Contacts</h1>
        {visibleContacts.length === 0 || <ContactList c={visibleContacts} onDelete={onDeleteContact} />
        }

        <h2>Find contacts by name</h2>
        <Filter filter={filter } onFilterChange={filterChange} />

      </>  
  )
}
