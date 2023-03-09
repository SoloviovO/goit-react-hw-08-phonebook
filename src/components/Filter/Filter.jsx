import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/contacts/contactsSelectors';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { Box, Container, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <Container maxW="container.xl">
      <Box maxW="450px" m="0 auto" p="0 50px 10px 50px">
        <FormLabel>
          Find contacts by name
          <Input
            onChange={event => dispatch(filterContacts(event.target.value))}
            value={filter}
            type="text"
            name="filter"
          />
        </FormLabel>
      </Box>
    </Container>
  );
};
