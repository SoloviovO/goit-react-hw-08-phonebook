import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { List, ListItem } from '@chakra-ui/react';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <List display="flex">
      <ListItem mr="10px">
        <NavLinkStyled to="/">Home</NavLinkStyled>
      </ListItem>
      {isLoggedIn && (
        <ListItem>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </ListItem>
      )}
    </List>
  );
};
