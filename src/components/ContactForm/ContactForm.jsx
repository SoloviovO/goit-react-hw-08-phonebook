import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsThunk';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmitForm = event => {
    event.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    if (contacts.find(contact => contact.name === name)) {
      return toast({
        status: 'warning',
        position: 'top-right',
        description: `${name} is already in contacts.`,
      });
    } else {
      dispatch(addContact(contact));
    }

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Container maxW="container.xl">
      <Box maxW="450px" m="0 auto" p="20px 50px">
        <form onSubmit={handleSubmitForm}>
          <FormLabel>
            Name
            <Input
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            Number
            <Input
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <Button type="submit">Add contact</Button>
        </form>
      </Box>
    </Container>
  );
};
