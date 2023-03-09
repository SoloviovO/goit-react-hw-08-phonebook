import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunk';
import { Button, ListItem, Text } from '@chakra-ui/react';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      mb="5px"
      key={id}
      display="flex"
      justifyContent="start"
      alignItems="center"
    >
      <Text>
        {name}: {number}
      </Text>
      <Button
        ml="auto"
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
