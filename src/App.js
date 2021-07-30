import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listPaymentEvents } from './graphql/queries';
import { createPaymentEvent as createPaymentEventMutation, deletePaymentEvent as deletePaymentEventMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [paymentEvents, setPaymentEvents] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchPaymentEvents();
  }, []);

  async function fetchPaymentEvents() {
    const apiData = await API.graphql({ query: listPaymentEvents });
    setPaymentEvents(apiData.data.listPaymentEvents.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createPaymentEventMutation, variables: { input: formData } });
    setPaymentEvents([ ...paymentEvents, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = paymentEvents.filter(note => note.id !== id);
    setPaymentEvents(newNotesArray);
    await API.graphql({ query: deletePaymentEventMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'total': e.target.value})}
        placeholder="Total"
        value={formData.description}
      />
            <input
        onChange={e => setFormData({ ...formData, 'subTotal': e.target.value})}
        placeholder="Subtotal"
        value={formData.description}
      />
            <input
        onChange={e => setFormData({ ...formData, 'tip': e.target.value})}
        placeholder="Tip"
        value={formData.description}
      />
            <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          paymentEvents.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);