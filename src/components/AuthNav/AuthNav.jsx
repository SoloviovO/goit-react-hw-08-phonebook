import React from 'react';
import { List, ListItem } from '@chakra-ui/react';
import { NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List ml="auto" display="flex">
      <ListItem>
        <NavLinkStyled to="/register">Registration</NavLinkStyled>
      </ListItem>
      <ListItem ml="10px">
        <NavLinkStyled to="/login">Log In</NavLinkStyled>
      </ListItem>
    </List>
  );
};
