import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./frontend/Form";
import Contacts from "./frontend/Contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const fetchContacts = async () => {
    const response = await axios.get("http://localhost:5000/contacts");
    setContacts(response.data);
  };

  const addContact = async (contact) => {
    await axios.post("http://localhost:5000/contacts", contact);
    fetchContacts();
  };

  const editContact = (contact) => {
    setEditingContact(contact);
  };

  const updateContact = async (contact) => {
    await axios.put(`http://localhost:5000/contacts/${contact._id}`, contact);
    setEditingContact(null); 
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <Form onSubmit={editingContact ? updateContact : addContact} initialData={editingContact}/>
      <Contacts contacts={contacts} onEdit={editContact} onDelete={deleteContact} />
    </div>
  );
};

export default App;
