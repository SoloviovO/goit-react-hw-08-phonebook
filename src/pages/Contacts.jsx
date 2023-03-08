import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

export const Contacts = () => {
  return (
    <>
      <h1 style={{ textAlign: ' center' }}>Pnonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: ' center' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
