import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { Box, Container, List, Text } from '@chakra-ui/react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW="container.xl">
      <Box maxW="450px" m="0 auto" p="0 50px">
        <List>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))
          ) : (
            <Text textAlign="center" fontWeight="500">
              Contacts not found
            </Text>
          )}
        </List>
      </Box>
    </Container>
  );
};
