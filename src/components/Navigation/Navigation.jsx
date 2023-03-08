import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/register">Registration</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};
