import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the name already exists
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div className='container'>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
        <strong>Name:</strong> <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
